import { cn } from '@/lib/utils';

const BlogArticleAside = ({
    headers
}: Readonly<{
    headers: {
        level: number;
        content: string | undefined;
        slug: string;
    }[];
}>) => {
    return (
        <aside className='text-foreground sticky top-24 hidden flex-col gap-5 self-start text-sm font-medium lg:flex lg:max-w-48'>
            <span>On this page</span>
            <nav className='flex flex-col gap-3'>
                {headers.map((header) => (
                    <a
                        key={header.slug}
                        href={`#${header.slug}`}
                        className={cn(
                            'text-muted-foreground hover:text-foreground',
                            !header.level || (header.level > 3 && 'hidden'),
                            header.level === 1 && 'font-semibold',
                            header.level === 2 && 'pl-4',
                            header.level === 3 && 'pl-8'
                        )}>
                        {header.content}
                    </a>
                ))}
            </nav>
            <a href='#article-title'>Back to Top ↑</a>
        </aside>
    );
};

export default BlogArticleAside;
