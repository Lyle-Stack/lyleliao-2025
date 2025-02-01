import { Metadata } from 'next';

import { DESCRIPTION, NAME } from '@/app/layout';
import BlogListHeaderSection from '@/components/blog/BlogListHeaderSection';
import BlogListPostsSection from '@/components/blog/BlogListPostsSection';

import { JSON_LD_MYSELF } from '../page';
import { allPosts } from './utils';

const TITLE = 'Blog x AI x Life';

export const metadata: Metadata = {
    title: TITLE
};

const jsonlfWebpage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: `${TITLE} | ${NAME}`,
    description: `${NAME} Blog Posts 清單 | ${DESCRIPTION}`,
    author: JSON_LD_MYSELF,
    publisher: JSON_LD_MYSELF
};

// const [highlightPost, secondRowPostOne, secondRowPostTwo] = allPosts;
// const restPosts = allPosts.slice(3, 10);

const [highlightPost] = allPosts;
const secondRowPostOne = highlightPost;
const secondRowPostTwo = highlightPost;
const restPosts = [highlightPost, highlightPost, highlightPost, highlightPost, highlightPost, highlightPost];

const BlogPage = () => {
    return (
        <>
            <BlogListHeaderSection />
            <BlogListPostsSection
                highlightPost={highlightPost}
                secondRowPosts={[secondRowPostOne, secondRowPostTwo]}
                restPosts={restPosts}
            />
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonlfWebpage) }} />
        </>
    );
};

export default BlogPage;
