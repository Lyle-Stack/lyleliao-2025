import { genreMap } from './utils-genre';
import fs from 'fs';
import { slug } from 'github-slugger';
import path from 'path';
import { z } from 'zod';

const isoStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);

function formatDate(isoString: string) {
    const date = new Date(isoString);

    return date.toLocaleDateString('en-US', {
        month: 'short', // Short month name (e.g., Jan)
        day: '2-digit', // Two-digit day of the month (e.g., 01, 15)
        year: 'numeric' // Four-digit year (e.g., 2025)
    });
}

// ! only use 個人觀點 or AI 自動化 & Agent with archived in genre
const PostRawMetadataSchema = z.object({
    title: z.string(),
    createdAt: isoStringSchema,
    publishedAt: isoStringSchema,
    updatedAt: isoStringSchema,
    summary: z.string(),
    keywords: z.string(),
    genre: z.string().regex(/^(?:個人觀點|AI 自動化 & Agent)(?:, ?archived)?$/gm),
    image: z.string().optional()
});

const PostTransformedMetadataSchema = PostRawMetadataSchema.extend({
    genre: z
        .string()
        .regex(/^(?:個人觀點|AI 自動化 & Agent)(?:, ?archived)?$/gm)
        .transform((value) => value.split(',').map((genre) => genre.trim())),
    formattedCreatedAt: z.string().transform(formatDate),
    formattedPublishedAt: z.string().transform(formatDate),
    formattedUpdatedAt: z.string().transform(formatDate)
});

type PostRawMetadata = z.infer<typeof PostRawMetadataSchema>;

export const HEADER_SLUG_PREFIX = 'anchor-';

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const content = fileContent.replace(frontmatterRegex, '').trim();

    // ? https://stackoverflow.com/questions/70801756/regex-extract-all-headers-from-markdown-string
    // see...[https://regex101.com/r/n6XQub/4]
    const headersRegex = /(?<flag>#{1,6})\s+(?<content>.+)/g;
    const headers = Array.from(content.matchAll(headersRegex)).map(({ groups }, index) => ({
        level: groups?.flag.length ?? 0,
        content: groups?.content,
        slug: `${HEADER_SLUG_PREFIX}${slug(groups?.content ?? index.toString())}`
    }));

    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match?.[1];
    if (!frontMatterBlock) {
        throw new Error('No frontmatter found');
    }

    const frontMatterLines = frontMatterBlock.trim().split('\n');
    const metadataRaw: Partial<PostRawMetadata> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadataRaw[key.trim() as keyof PostRawMetadata] = value;
    });

    const metadata = PostTransformedMetadataSchema.parse({
        ...metadataRaw,
        formattedCreatedAt: metadataRaw.createdAt,
        formattedPublishedAt: metadataRaw.publishedAt,
        formattedUpdatedAt: metadataRaw.updatedAt
    });

    return { metadata, content, headers };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');

    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map((file) => {
        const { metadata, content, headers } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            href: `/blog/${genreMap[metadata.genre[0] as keyof typeof genreMap]}/${slug}`,
            content,
            headers
        };
    });
}

function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'assets', 'posts'));
}

const allPosts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
    }

    return 1;
});

export const livePosts = allPosts
    .filter((post) => !post.metadata.genre.includes('archived'))
    .map((post) => ({ ...post, metadata: { ...post.metadata, genre: post.metadata.genre[0] } }));
export const povPosts = livePosts.filter((post) => post.metadata.genre.includes('個人觀點'));
export const aiPosts = livePosts.filter((post) => post.metadata.genre.includes('AI 自動化 & Agent'));

export const archivedPosts = allPosts
    .filter((post) => post.metadata.genre.includes('archived'))
    .map((post) => ({ ...post, metadata: { ...post.metadata, genre: post.metadata.genre[0] } }));

export type PostMetadata = (typeof livePosts)[number]['metadata'];
