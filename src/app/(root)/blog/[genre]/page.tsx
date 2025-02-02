import { Metadata } from 'next';

import { DESCRIPTION, NAME } from '@/app/layout';
import BlogListHeaderSection from '@/components/blog/BlogListHeaderSection';
import BlogListPostsSection from '@/components/blog/BlogListPostsSection';
import { BreadcrumbItem, BreadcrumbPage } from '@/components/ui/breadcrumb';

import { JSON_LD_MYSELF } from '../../page';
import { TITLE } from '../page';
import { aiPosts, povPosts } from '../utils';
import { allGenreSlug, genreReverseMap } from '../utils-genre';

export async function generateStaticParams() {
    return allGenreSlug.map((genre) => ({
        genre
    }));
}

type Props = {
    params: Promise<{ genre: (typeof allGenreSlug)[number] }>;
};

export const metadata: Metadata = {
    title: TITLE
};

const BlogPage = async ({ params }: Props) => {
    const { genre: propGenre } = await params;
    const post = propGenre === 'pov' ? povPosts : aiPosts;
    const genre = genreReverseMap[propGenre];

    const [highlightPost, secondRowPostOne, secondRowPostTwo] = post;
    const restPosts = post.slice(3, 9);

    return (
        <>
            <BlogListHeaderSection headerContent={{ title: genre }} genreSwitchContent={{ defaultValue: propGenre }} />
            <BlogListPostsSection
                highlightPost={highlightPost}
                secondRowPosts={[secondRowPostOne, secondRowPostTwo]}
                restPosts={restPosts}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'http://schema.org',
                        '@type': 'WebPage',
                        name: `${genre} | ${TITLE} | ${NAME}`,
                        description: `${genre} | ${NAME} Blog Posts | ${DESCRIPTION}`,
                        author: JSON_LD_MYSELF,
                        publisher: JSON_LD_MYSELF
                    })
                }}
            />
        </>
    );
};

export default BlogPage;
