import fs from 'fs';
import { slug } from 'github-slugger';
import path from 'path';
import { z } from 'zod';

// ! only use 個人觀點 or AI 自動化 & Agent with archived in genre
const metadataRawSchema = z.object({
    title: z.string(),
    createdAt: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    summary: z.string(),
    keywords: z.string(),
    genre: z.string().regex(/^(?:個人觀點|AI 自動化 & Agent)(?:, ?archived)?$/gm),
    image: z.string().optional()
});

const metadataTransformedSchema = metadataRawSchema.extend({
    genre: z
        .string()
        .regex(/^(?:個人觀點|AI 自動化 & Agent)(?:, ?archived)?$/gm)
        .transform((value) => value.split(',').map((genre) => genre.trim()))
});

type MetadataRaw = z.infer<typeof metadataRawSchema>;

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
    const metadataRaw: Partial<MetadataRaw> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadataRaw[key.trim() as keyof MetadataRaw] = value;
    });

    const metadata = metadataTransformedSchema.parse(metadataRaw);

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

export const allCategories = Array.from(new Set(allPosts.map((post) => post.metadata.genre).flat()));

export const livePosts = allPosts
    .filter((post) => !post.metadata.genre.includes('archived'))
    .map((post) => ({ ...post, metadata: { ...post.metadata, genre: post.metadata.genre[0] } }));
export const povPosts = livePosts.filter((post) => post.metadata.genre.includes('個人觀點'));
export const aiPosts = livePosts.filter((post) => post.metadata.genre.includes('AI 自動化 & Agent'));

export const archivedPosts = allPosts
    .filter((post) => post.metadata.genre.includes('archived'))
    .map((post) => ({ ...post, metadata: { ...post.metadata, genre: post.metadata.genre[0] } }));

export type Metadata = (typeof livePosts)[number]['metadata'];
