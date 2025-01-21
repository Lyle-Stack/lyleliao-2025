import { Metadata } from 'next';

import BlogSection from '@/components/home/BlogSection';

export const metadata: Metadata = {
    title: 'Blog x AI x Life'
};

const HomePage = () => {
    return <BlogSection />;
};

export default HomePage;
