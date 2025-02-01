import fs from 'fs';
import { slug } from 'github-slugger';
import path from 'path';

export type Metadata = {
    title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    summary: string;
    keywords: string;
    genre: string;
    image?: string;
};

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
        return {
            content,
            headers
        };
    }

    const frontMatterLines = frontMatterBlock.trim().split('\n');
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content, headers };
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

export const allPosts = getBlogPosts();
