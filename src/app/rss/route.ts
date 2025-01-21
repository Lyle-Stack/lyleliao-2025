import { getBlogPosts } from '../(root)/blog/utils';
import { BASE_URL } from '../sitemap';

export async function GET() {
    const allBlogs = getBlogPosts();
    const defaultLastModified = new Date();

    const itemsXml = allBlogs
        .filter((blog) => blog.metadata)
        .sort((a, b) => {
            if (new Date(a.metadata!.publishedAt) > new Date(b.metadata!.publishedAt)) {
                return -1;
            }

            return 1;
        })
        .map(
            (post) =>
                `<item>
          <title>${post.metadata!.title}</title>
          <link>${BASE_URL}/blog/${post.slug}</link>
          <description>${post.metadata!.summary || ''}</description>
          <pubDate>${new Date(post.metadata!.publishedAt).toUTCString()}</pubDate>
        </item>`
        )
        .join('\n');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Lyle | AI Automation & Website Builder</title>
        <link>${BASE_URL}</link>
        <description>Lyle RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'text/xml'
        }
    });
}
