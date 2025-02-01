import { Metadata, ResolvingMetadata } from 'next';

import { DESCRIPTION, NAME } from '@/app/layout';
import HeaderSection from '@/components/share/HeaderSection';

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
    description: `${NAME} Blog Posts List | ${DESCRIPTION}`,
    author: JSON_LD_MYSELF,
    publisher: JSON_LD_MYSELF
};

const BlogPage = () => {
    return (
        <>
            <HeaderSection />
            {JSON.stringify(allPosts, undefined, 4)}
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonlfWebpage) }} />
        </>
    );
};

export default BlogPage;
