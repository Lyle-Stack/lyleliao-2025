import { Metadata } from 'next';

import BlogSection from '@/components/home/BlogSection';

export const metadata: Metadata = {
    title: 'Blog x AI x Life'
};

const BlogPage = () => {
    return <BlogSection />;
};

export default BlogPage;
