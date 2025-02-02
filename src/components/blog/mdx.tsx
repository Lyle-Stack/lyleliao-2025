/**
 * ? https://mdxjs.com/table-of-components/
 * The components you can overwrite use their standard HTML names.
 * Normally, in markdown, those names are:
 *   a, blockquote, br, code, em, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, strong, and ul.
 * With remark-gfm (see https://github.com/remarkjs/remark-gfm), you can also use:
 *   del, input, section, sup, table, tbody, td, th, thead, and tr.
 * Other remark plugins that add support for new constructs and advertise that they work with rehype, will also work with MDX.
 */
import React from 'react';

import Link from 'next/link';

import { HEADER_SLUG_PREFIX } from '@/app/(root)/blog/utils';
import { cn } from '@/lib/utils';
import { Slot, Slottable } from '@radix-ui/react-slot';

import { Separator } from '../ui/separator';
import { ExternalLinkIcon } from 'lucide-react';
import { MDXRemote, MDXRemoteProps, compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/**
 * ? props types see : https://github.com/justinmahar/react-html-props/blob/master/src/index.tsx
 */

// br, em, pre, and strong

// text-foreground and text-lg classes are added on the <main> element (one level up of the <CustomMDX>)
const BASE_TEXT_CLASSNAMES = 'text-pretty break-words';

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    return function Heading({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
        const Comp = !level ? Slot : level !== 6 ? `h${level + 1}` : 'h6';

        return (
            <Comp
                className={cn(
                    BASE_TEXT_CLASSNAMES,
                    'relative mt-6 mb-4 font-bold',
                    level === 1 ? 'text-primary scroll-mt-28 text-[2rem]' : 'scroll-mt-24',
                    level === 2 && 'text-2xl',
                    level > 2 && 'mb-2 text-lg font-semibold'
                )}
                {...props}>
                <Slottable>{children}</Slottable>
            </Comp>
        );
    };
}

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn(BASE_TEXT_CLASSNAMES, 'mb-5')} {...props} />;
}

function Blockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
    // content will be wrap in <p>
    return (
        <blockquote
            className='text-muted-foreground relative w-fit px-12 py-0 italic before:absolute before:top-2.5 before:-left-19 before:text-8xl/10 before:font-bold before:opacity-25 before:content-["“"] after:absolute after:-right-11 after:-bottom-11 after:text-8xl/10 after:opacity-25 after:content-["”"] [&>p]:mb-0 [&>p]:text-center [&>p]:text-balance'
            style={{ marginBlock: '2rem', marginInline: 'auto' }}
            {...props}
        />
    );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const href = props.href;
    const baseClassName =
        'text-inherit font-inherit no-underline shadow-[0_1.5px_0_var(--md-sys-color-primary)] transition-shadow duration-200 will-change-transform box-decoration-clone hover:shadow-transparent cursor-pointer';

    if (href?.startsWith('/')) {
        return (
            <Link href={href} {...props} className={baseClassName}>
                {props.children}
            </Link>
        );
    }

    if (href?.startsWith('#')) {
        return <a {...props} className={baseClassName} />;
    }

    return (
        <a
            target='_blank'
            rel='noopener noreferrer'
            className={cn(baseClassName, 'inline-flex flex-row flex-nowrap items-baseline justify-start gap-0.5')}
            {...props}>
            <span className='sr-only'>新分頁開啟</span>
            <span>{props.children}</span>
            <ExternalLinkIcon className='size-[0.7em]' />
        </a>
    );
}

async function RoundedImage({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    const altPart =
        alt &&
        (await compileMDX({
            source: alt,
            components: {
                p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
                    <small className='text-muted-foreground text-center text-sm text-balance' {...props} />
                )
            }
        }));

    return (
        <span className='flex w-full flex-col justify-center gap-1'>
            <img alt={alt} className='rounded-md' {...props} />
            {altPart && altPart.content}
        </span>
    );
}

function Code(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <code
            className='relative -mx-px my-px inline rounded-md bg-(--md-sys-color-primary-container) box-decoration-clone px-1.5 py-0.5 font-mono text-[0.9375em] tracking-[-0.5px] text-(--md-sys-color-on-primary-container) not-italic'
            {...props}
        />
    );
}

function ListWrapper(ordered: boolean) {
    return function List(props: React.HTMLAttributes<HTMLUListElement>) {
        const baseClassName = 'mb-8 list-none p-0 text-inherit';
        if (ordered) {
            return (
                <ol
                    className={cn(
                        baseClassName,
                        '[--counter-name:_counts] [&>li]:items-baseline [&>li]:before:justify-center [&>li]:before:content-[counters(var(--counter-name),".")_"._"]'
                    )}
                    style={{ counterReset: 'var(--counter-name)' }}
                    {...props}
                />
            );
        }

        return (
            <ul
                className={cn(
                    baseClassName,
                    '[&>li]:items-start [&>li]:before:justify-start [&>li]:before:content-["→"]'
                )}
                {...props}
            />
        );
    };
}

function ListItem({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li
            className='before:text-primary mb-4 flex flex-row flex-nowrap gap-3 before:inline-flex before:w-6 before:font-medium'
            style={{ counterIncrement: 'var(--counter-name)' }}
            {...props}>
            <div className='flex-1'>{children}</div>
        </li>
    );
}

export const AsideTagClassInjector =
    '[&_aside]:relative [&_aside]:-mx-8 [&_aside]:mt-8 [&_aside]:mb-16 [&_aside]:rounded-r-sm [&_aside]:border-l-4 [&_aside]:border-solid [&_aside]:border-l-ring [&_aside]:bg-input [&_aside]:pl-7 [&_aside]:pr-8 [&_aside]:py-8 [&_aside]:text-base';

export const TaskListClassInjector =
    '[&_ul.contains-task-list]:mb-8 [&_ul.contains-task-list>li.task-list-item]:mb-4 [&_ul.contains-task-list>li.task-list-item_input]:size-4.5 [&_ul.contains-task-list>li.task-list-item_input]:translate-y-0.5';

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    p: P,
    blockquote: Blockquote,
    hr: () => <Separator className='mb-4' />,
    a: CustomLink,
    code: Code,
    ol: ListWrapper(true),
    ul: ListWrapper(false),
    li: ListItem,
    img: RoundedImage
};

export function CustomMDX({ source }: Omit<MDXRemoteProps, 'options' | 'components'>) {
    return (
        <MDXRemote
            source={source}
            components={components}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [[rehypeSlug, { prefix: HEADER_SLUG_PREFIX }]],
                    format: 'mdx'
                },
                parseFrontmatter: false
            }}
        />
    );
}
