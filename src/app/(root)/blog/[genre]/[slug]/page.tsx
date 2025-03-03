import type { Metadata } from 'next';
import { RedirectType, notFound, permanentRedirect } from 'next/navigation';

import { BASE_URL } from '@/app/sitemap';
import BlogArticleAside from '@/components/blog/BlogArticleAside';
import BlogPostHeaderSection from '@/components/blog/BlogPostHeaderSection';
import { AsideTagClassInjector, CustomMDX, TaskListClassInjector } from '@/components/blog/mdx';
import BlogSection from '@/components/home/BlogSection';
import JsonldScript from '@/components/share/JsonldScript';
import SectionPadding from '@/components/share/SectionPadding';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { JSON_LD_MYSELF, NAME } from '@/constant/jsonld-and-meta';
import { cn } from '@/lib/utils';

import { livePosts } from '../../utils';
import { allGenreSlug, genreReverseMap } from '../../utils-genre';

export async function generateStaticParams() {
    return livePosts.map((post) => ({
        slug: post.slug
    }));
}

type Props = {
    params: Promise<{ genre: (typeof allGenreSlug)[number]; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = livePosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;

    const ogImage =
        image ??
        `${BASE_URL}/og?tag=&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}&ni=t&tr=t`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: new URL(post.href, BASE_URL).toString(),
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage]
        }
    };
}

export default async function Blog({ params }: Props) {
    const { slug, genre: propGenre } = await params;
    const post = livePosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    if (post.metadata.genre !== genreReverseMap[propGenre]) {
        permanentRedirect(post.href, RedirectType.replace);
    }

    return (
        <>
            <SectionPadding>
                <section>
                    <div className='mx-auto px-3'>
                        <section className='bg-background w-full pt-4'>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/blog/${propGenre}`}>
                                            {post.metadata.genre}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{post.metadata.title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </section>
                        <BlogPostHeaderSection metadata={post.metadata} />
                        <article
                            className='border-border relative flex flex-row justify-center gap-12 border-x px-4'
                            aria-labelledby='article-title'>
                            <main
                                className={cn(
                                    'text-foreground grid max-w-3xl grid-cols-1 px-8 text-lg',
                                    AsideTagClassInjector,
                                    TaskListClassInjector
                                )}>
                                <CustomMDX source={post.content} />
                            </main>
                            <BlogArticleAside headers={post.headers} />
                        </article>
                    </div>

                    <JsonldScript
                        jsonld={{
                            '@context': 'http://schema.org',
                            '@type': 'BlogPosting',
                            image: new URL(
                                post.metadata.image
                                    ? post.metadata.image
                                    : `/og?tag=&title=${encodeURIComponent(post.metadata.title)}&desc=${encodeURIComponent(post.metadata.summary)}&ni=t&tr=t`,
                                BASE_URL
                            ).toString(),
                            url: new URL(post.href, BASE_URL).toString(),
                            headline: post.metadata.title,
                            description: post.metadata.summary,
                            dateCreated: post.metadata.createdAt,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.updatedAt,
                            inLanguage: 'zh-TW',
                            isFamilyFriendly: true,
                            copyrightYear: `${new Date().getFullYear()}`,
                            copyrightHolder: NAME,
                            contentLocation: {
                                '@type': 'Place',
                                name: 'Taipei City, Taiwan'
                            },
                            accountablePerson: JSON_LD_MYSELF,
                            author: JSON_LD_MYSELF,
                            creator: JSON_LD_MYSELF,
                            publisher: JSON_LD_MYSELF,
                            mainEntityOfPage: {
                                '@type': 'WebPage',
                                '@id': new URL(post.href, BASE_URL).toString()
                            },
                            keywords: post.metadata.keywords.split(',').map((keyword) => keyword.trim()),
                            genre: [post.metadata.genre],
                            articleSection: post.headers
                                .filter((header) => header.level === 1)
                                .map((header) => header.content),
                            articleBody: post.content
                        }}
                    />
                </section>
            </SectionPadding>
            <BlogSection
                headerContent={{
                    subTitle: 'More Posts',
                    title: '更多好文',
                    desc: '每日一篇 每日補充 每日茁壯'
                }}
            />
        </>
        // <section>
        //     <h1 className='title text-2xl font-semibold tracking-tighter'>{post.metadata.title}</h1>
        //     <div className='mb-8 mt-2 flex items-center justify-between text-sm'>
        //         <p className='text-sm text-neutral-600 dark:text-neutral-400'>
        //             {formatDate(post.metadata.publishedAt)}
        //         </p>
        //     </div>
        //     <article className='prose'>
        //     </article>
        // </section>
    );
}
