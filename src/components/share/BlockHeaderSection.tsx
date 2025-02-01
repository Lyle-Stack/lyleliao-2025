import { cn } from '@/lib/utils';

import { ClassNameValue } from 'tailwind-merge';

type Props = {
    className?: ClassNameValue;
    subTitle?: React.ReactNode;
    title?: React.ReactNode;
    desc?: React.ReactNode;
};

const BlockHeaderSection = ({
    className,
    subTitle = 'Blog',
    title = '精采好文 開拓視野',
    desc = '為你的工作、生活、學習提供有用的資訊與技巧，讓你的生活更加美好'
}: Props) => {
    return (
        <div
            className={cn(
                'flex w-[min(calc(65ch+3rem),100%)] flex-col items-start gap-4 px-6 text-left sm:mx-auto sm:items-center md:gap-5 lg:mx-0 lg:items-start',
                className
            )}>
            <p className='text-muted-foreground text-base font-semibold md:text-sm'>{subTitle}</p>
            <h2 id='blog-section-2-heading' className='text-3xl leading-tight font-bold md:text-4xl'>
                {title}
            </h2>
            <p className='text-muted-foreground text-base'>{desc}</p>
        </div>
    );
};

export default BlockHeaderSection;
