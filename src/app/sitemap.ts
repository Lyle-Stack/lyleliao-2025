import type { MetadataRoute } from 'next';

import { livePosts } from './(root)/blog/utils';
import { allGenreSlug } from './(root)/blog/utils-genre';

export const BASE_URL = new URL(
    process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://lyleliao.com'
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ['', ['', ...allGenreSlug].map((slug) => `/blog/${slug}`)].flat().map((route) => ({
        url: new URL(route, BASE_URL).toString(),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: route ? ('weekly' as const) : ('monthly' as const),
        alternates: {
            languages: {
                'zh-TW': new URL(route, BASE_URL).toString()
            }
        }
    }));

    const blogs = livePosts.map((post) => ({
        url: new URL(post.href, BASE_URL).toString(),
        lastModified: post.metadata.publishedAt.split('T')[0],
        changeFrequency: 'yearly' as const,
        alternates: {
            languages: {
                'zh-TW': new URL(post.href, BASE_URL).toString()
            }
        }
    }));

    return [...routes, ...blogs];
}
