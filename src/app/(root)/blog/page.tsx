import type { Metadata } from 'next';

import BlogListHeaderSection from '@/components/blog/BlogListHeaderSection';
import BlogListPostsSection from '@/components/blog/BlogListPostsSection';
import JsonldScript from '@/components/share/JsonldScript';
import { BLOG_TITLE, DESCRIPTION, JSON_LD_MYSELF, NAME } from '@/constant/jsonld-and-meta';

import { livePosts } from './utils';

export const metadata: Metadata = {
    title: BLOG_TITLE
};

const jsonlfWebpage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: `${BLOG_TITLE} | ${NAME}`,
    description: `${NAME} Blog Posts | ${DESCRIPTION}`,
    author: JSON_LD_MYSELF,
    publisher: JSON_LD_MYSELF
};

const [highlightPost, secondRowPostOne, secondRowPostTwo] = livePosts;
const restPosts = livePosts.slice(3, 9);

const BlogPage = () => {
    return (
        <>
            <BlogListHeaderSection />
            <BlogListPostsSection
                highlightPost={highlightPost}
                secondRowPosts={[secondRowPostOne, secondRowPostTwo]}
                restPosts={restPosts}
            />
            <JsonldScript jsonld={jsonlfWebpage} />
        </>
    );
};

export default BlogPage;
