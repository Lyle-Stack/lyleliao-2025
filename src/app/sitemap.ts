import type { MetadataRoute } from 'next';

import { getBlogPosts } from './(root)/blog/utils';

export const BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://lyleliao.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultLastModified = new Date().toISOString().split('T')[0];

    const routes = ['', '/blog'].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: defaultLastModified
    }));

    const blogs = getBlogPosts().map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.metadata?.publishedAt ?? defaultLastModified
    }));

    return [...routes, ...blogs];
}
