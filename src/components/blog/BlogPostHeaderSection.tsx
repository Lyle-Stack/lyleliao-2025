import { Metadata } from '@/app/(root)/blog/utils';

import { AspectRatio } from '../ui/aspect-ratio';

const BlogPostHeaderSection = ({ metadata }: Readonly<{ metadata: Metadata }>) => {
    return (
        <div className='flex flex-col gap-8 pt-8 pb-16 lg:flex-row lg:pt-16'>
            <div className='flex flex-1 flex-col justify-between gap-6'>
                <div className='flex flex-col gap-4 md:gap-5'>
                    <p className='text-muted-foreground text-sm'>{metadata.publishedAt} · Point of View</p>
                    <h1 id='article-title' className='text-foreground scroll-mt-40 text-4xl font-bold lg:text-5xl'>
                        {metadata.title}
                    </h1>
                    <p className='text-muted-foreground text-lg'>{metadata.summary}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='size-10 shrink-0 grow-0 overflow-hidden rounded-full'>
                        <img
                            className='size-full object-cover'
                            alt='Lyle'
                            src='https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg'
                        />
                    </span>
                    <div className='text-sm'>
                        <p className='text-foreground font-medium'>Lyle 仲逸</p>
                        <p className='text-muted-foreground'>AI Automation x Website Builder</p>
                    </div>
                </div>
            </div>
            <div className='h-full flex-1'>
                <AspectRatio ratio={1.6}>
                    <img
                        src={
                            metadata.image ?? 'https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-og.png'
                        }
                        alt={metadata.title}
                        className='size-full rounded-md object-cover'
                    />
                </AspectRatio>
            </div>
        </div>
    );
};

export default BlogPostHeaderSection;
