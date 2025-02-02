import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { NAME } from '@/app/layout';
import { BASE_URL } from '@/app/sitemap';
import BlogArticleAside from '@/components/blog/BlogArticleAside';
import BlogPostHeaderSection from '@/components/blog/BlogPostHeaderSection';
import { AsideTagClassInjector, CustomMDX, TaskListClassInjector } from '@/components/blog/mdx';
import SectionPadding from '@/components/share/SectionPadding';
import { cn } from '@/lib/utils';

import { JSON_LD_MYSELF } from '../../page';
import { livePosts } from '../utils';

export async function generateStaticParams() {
    return livePosts.map((post) => ({
        slug: post.slug
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props, _parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = await params;
    const post = livePosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    const metadata = post.metadata;

    if (!metadata) {
        return {};
    }

    const { title, publishedAt: publishedTime, summary: description, image } = metadata;
    const ogImage = image
        ? image
        : `${BASE_URL}/og?tag=&title=${encodeURIComponent(metadata.title)}&desc=${encodeURIComponent(metadata.summary)}&ni=t&tr=t`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${BASE_URL}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage
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
    const { slug } = await params;
    const post = livePosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <SectionPadding>
            <section>
                <div className='blog mx-auto px-3'>
                    {post.metadata && <BlogPostHeaderSection metadata={post.metadata} />}
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
                {/* JSON-LD */}
                {post.metadata && (
                    <script
                        type='application/ld+json'
                        suppressHydrationWarning
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'http://schema.org',
                                '@type': 'BlogPosting',
                                image: new URL(
                                    post.metadata.image
                                        ? post.metadata.image
                                        : `/og?tag=&title=${encodeURIComponent(post.metadata.title)}&desc=${encodeURIComponent(post.metadata.summary)}&ni=t&tr=t`,
                                    BASE_URL
                                ).toString(),
                                url: new URL(`/blog/${post.slug}`, BASE_URL).toString(),
                                headline: post.metadata.title,
                                description: post.metadata.summary,
                                dateCreated: Number.isNaN(Date.parse(post.metadata.createdAt))
                                    ? ''
                                    : new Date(post.metadata.createdAt).toISOString(),
                                datePublished: Number.isNaN(Date.parse(post.metadata.publishedAt))
                                    ? ''
                                    : new Date(post.metadata.publishedAt).toISOString(),
                                dateModified: Number.isNaN(Date.parse(post.metadata.updatedAt))
                                    ? ''
                                    : new Date(post.metadata.updatedAt).toISOString(),
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
                                    '@id': new URL(`/blog/${post.slug}`, BASE_URL).toString()
                                },
                                keywords: post.metadata.keywords.split(',').map((keyword) => keyword.trim()),
                                genre: post.metadata.genre.split(',').map((genre) => genre.trim()),
                                articleSection: post.headers
                                    .filter((header) => header.level === 1)
                                    .map((header) => header.content),
                                articleBody: post.content
                            })
                        }}
                    />
                )}
            </section>
        </SectionPadding>
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
