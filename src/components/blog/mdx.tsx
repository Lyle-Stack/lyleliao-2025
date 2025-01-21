import React from 'react';

import Link from 'next/link';

import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { highlight } from 'sugar-high';

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
    const headers = data.headers.map((header, index) => <th key={index}>{header}</th>);
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const href = props.href;

    if (href?.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        );
    }

    if (href?.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

function RoundedImage({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img alt={alt} className='rounded-md' {...props} />;
}

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
    const codeHTML = highlight(children as unknown as string);

    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table
};

export function CustomMDX(props: Omit<MDXRemoteProps, 'options'>) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkToc],
                    rehypePlugins: [
                        rehypeSlug,
                        [
                            rehypeAutolinkHeadings,
                            {
                                behavior: 'prepend',
                                content: /** @type {Array<ElementContent>} */ fromHtmlIsomorphic(
                                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
                                    { fragment: true }
                                ).children
                            }
                        ]
                    ],
                    format: 'mdx'
                },
                parseFrontmatter: false
            }}
        />
    );
}
