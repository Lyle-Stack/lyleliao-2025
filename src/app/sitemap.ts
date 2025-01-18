import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lyleliao.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: 'https://lyleliao.com/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8
        }
        // TODO: update the announcement to dynamic blog post
        // {
        //     url: 'https://lyleliao.com/announcement',
        //     lastModified: new Date(),
        //     changeFrequency: 'weekly',
        //     priority: 0.64
        // }
    ];
}
