import Link from 'next/link';

import { livePosts } from '@/app/(root)/blog/utils';
import { cn } from '@/lib/utils';

import { CardWithInnerLink, PureCard } from '../share/CustomizedCard';
import SectionPadding from '../share/SectionPadding';
import { AspectRatio } from '../ui/aspect-ratio';

type Post = (typeof livePosts)[number];

type Porps = {
    highlightPost?: Post;
    secondRowPosts?: [Post, Post];
    restPosts?: Post[];
};

const BlogCardLinkWithImage = ({
    post,
    ratio,
    className,
    cardClassName,
    imgClassName
}: {
    post: Post;
    ratio?: number;
    className?: string;
    cardClassName?: string;
    imgClassName?: string;
}) => {
    return (
        <Link
            href={post.href}
            role='listitem'
            className={cn('group/card flex flex-col flex-nowrap lg:flex-row lg:items-center', className)}>
            <PureCard
                className={cn('flex-1 pb-4 lg:h-full lg:pb-6', cardClassName)}
                time={post.metadata.formattedPublishedAt}
                cat={post.metadata.genre}
                href='true' // for link hover effect
                title={post.metadata.title}
                desc={post.metadata.summary}
                imgSrc='https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg'
                author='Lyle 仲逸'
                role='AI Automation x Website Builder'
            />
            <div className={cn('mx-auto w-[min(calc(65ch+3rem),100%)] flex-1 px-6 lg:my-auto lg:px-0', imgClassName)}>
                <AspectRatio ratio={ratio}>
                    <img
                        src={
                            post.metadata.image ??
                            `/og?tag=${post.metadata.genre === '個人觀點' ? 'POV' : 'AIAA'},${post.metadata.keywords}&title=${encodeURIComponent(post.metadata.title)}&desc=${encodeURIComponent(post.metadata.summary)}&ni=t&tr=t`
                        }
                        alt={post.metadata.title}
                        className='size-full rounded-md object-cover'
                    />
                </AspectRatio>
            </div>
        </Link>
    );
};

const BlogListPostsSection = ({ highlightPost, secondRowPosts, restPosts }: Porps) => {
    return (
        <SectionPadding>
            <section className='pb-16 md:pb-24' aria-labelledby='blog-list-section'>
                <div className='mx-auto px-3'>
                    <div className='flex flex-col items-start gap-12' role='list'>
                        {highlightPost && (
                            <BlogCardLinkWithImage
                                post={highlightPost}
                                key={`highlight-post-${highlightPost.slug}`}
                                ratio={1.6}
                            />
                        )}
                        <div className='-mb-12 grid grid-cols-1 lg:mb-auto lg:grid-cols-2' role='list'>
                            {secondRowPosts &&
                                secondRowPosts
                                    .filter(Boolean)
                                    .map((post, index) => (
                                        <BlogCardLinkWithImage
                                            post={post}
                                            key={`second-row-post-${index}-${post.slug}`}
                                            cardClassName='border-b lg:border-b-0 lg:pr-2'
                                            imgClassName='hidden lg:block'
                                        />
                                    ))}
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-y-8' role='list'>
                            {restPosts &&
                                restPosts.map((post, index) => (
                                    <CardWithInnerLink
                                        key={`rest-blog-list-${index}-${post.slug}`}
                                        time={post.metadata.formattedPublishedAt}
                                        cat={post.metadata.genre}
                                        href={post.href}
                                        title={post.metadata.title}
                                        desc={post.metadata.summary}
                                        imgSrc='https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg'
                                        author='Lyle 仲逸'
                                        role='AI Automation x Website Builder'
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogListPostsSection;
