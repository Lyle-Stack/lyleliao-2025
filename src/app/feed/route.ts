import { allPosts } from '../(root)/blog/utils';
import { DESCRIPTION, NAME } from '../layout';
import { BASE_URL } from '../sitemap';
import RSS from 'rss';

export async function GET() {
    const feedOptions = {
        title: `${NAME} Blog Posts | RSS Feed`,
        description: DESCRIPTION,
        site_url: BASE_URL.toString(),
        feed_url: `${BASE_URL}/feed`,
        image_url: `${BASE_URL}/lyle-og.png`,
        pubDate: new Date(),
        language: 'zh-TW',
        copyright: `All rights reserved ${new Date().getFullYear()}`
    };

    const feed = new RSS(feedOptions);

    allPosts
        .filter((blog) => blog.metadata)
        .sort((a, b) => {
            if (new Date(a.metadata!.publishedAt) > new Date(b.metadata!.publishedAt)) {
                return -1;
            }

            return 1;
        })
        .slice(0, 20)
        .forEach((post) => {
            feed.item({
                title: post.metadata!.title,
                description: post.metadata!.summary || '',
                url: new URL(`/blog/${post.slug}`, BASE_URL).toString(),
                // TODO: update this category within mdx file meta
                categories: post.metadata!.genre.split(',').map((genre) => genre.trim()),
                author: NAME,
                date: post.metadata!.publishedAt,
                lat: 24.1316156, //optional latitude field for GeoRSS
                long: 120.6098393 //optional longitude field for GeoRSS
            });
        });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'text/xml'
        }
    });
}
