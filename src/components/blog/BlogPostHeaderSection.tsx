// TODO: add nav breadcrumb (tag, category, etc.)
import { Metadata } from '@/app/(root)/blog/utils';

import { AspectRatio } from '../ui/aspect-ratio';

const BlogPostHeaderSection = ({ metadata }: Readonly<{ metadata: Metadata }>) => {
    return (
        <div className='flex flex-col gap-8 pb-16 pt-8 lg:flex-row lg:pt-16'>
            <div className='flex flex-1 flex-col justify-between gap-6'>
                <div className='flex flex-col gap-4 md:gap-5'>
                    <p className='text-sm text-muted-foreground'>{metadata.publishedAt} · Point of View</p>
                    <h1 id='article-title' className='scroll-mt-40 text-4xl font-bold text-foreground lg:text-5xl'>
                        {metadata.title}
                    </h1>
                    <p className='text-lg text-muted-foreground'>{metadata.summary}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='size-10 shrink-0 grow-0 overflow-hidden rounded-full'>
                        <img className='size-full object-cover' alt='Lyle' src='/images/lyle-avatar.jpg' />
                    </span>
                    <div className='text-sm'>
                        <p className='font-medium text-foreground'>Lyle 仲逸</p>
                        <p className='text-muted-foreground'>AI Automation x Website Builder</p>
                    </div>
                </div>
            </div>
            <div className='h-full flex-1'>
                <AspectRatio ratio={1.6}>
                    <img
                        src={metadata.image ?? '/images/lyle-og.png'}
                        alt={metadata.title}
                        className='size-full rounded-md object-cover'
                    />
                </AspectRatio>
            </div>
        </div>
    );
};

export default BlogPostHeaderSection;
