import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { BASE_URL } from '@/app/sitemap';
import BlogArticleAside from '@/components/blog/BlogArticleAside';
import BlogPostHeaderSection from '@/components/blog/BlogPostHeaderSection';
import { AsideTagClassInjector, CustomMDX, TaskListClassInjector } from '@/components/blog/mdx';
import SectionPadding from '@/components/share/SectionPadding';
import { cn } from '@/lib/utils';

import { getBlogPosts } from '../utils';

// import './post.css';

export async function generateStaticParams() {
    const posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
    //     searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props, _parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);

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
    const post = getBlogPosts().find((post) => post.slug === slug);

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
                                '@context': 'https://schema.org',
                                '@type': 'BlogPosting',
                                headline: post.metadata.title,
                                datePublished: post.metadata.publishedAt,
                                dateModified: post.metadata.publishedAt,
                                description: post.metadata.summary,
                                image: post.metadata.image
                                    ? `${BASE_URL}${post.metadata.image}`
                                    : `${BASE_URL}/og?tag=&title=${encodeURIComponent(post.metadata.title)}&desc=${encodeURIComponent(post.metadata.summary)}&ni=t&tr=t`,
                                url: `${BASE_URL}/blog/${post.slug}`,
                                author: {
                                    '@type': 'Person',
                                    name: 'Lyle 仲逸'
                                }
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
