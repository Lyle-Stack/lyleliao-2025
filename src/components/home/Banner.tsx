import { Button } from '../ui/button';
import { ChevronsRight, X } from 'lucide-react';

const Banner = () => {
    return (
        <aside role='banner' aria-label='Product announcement' className='fixed inset-x-0 top-16 z-50 mx-auto px-6'>
            <div className='relative mx-auto flex max-w-5xl items-center rounded-xl bg-zinc-950 py-3 pl-4 pr-6 shadow-lg md:py-4'>
                <a href='#' className='flex w-full cursor-pointer items-center justify-start gap-2'>
                    <span className='text-sm text-white hover:underline'>
                        <span className='font-semibold'>New update</span> · Pro blocks are now available in shadcn/ui
                        kit for Figma!
                    </span>
                    <ChevronsRight className='hidden size-4 md:block' />
                </a>
                <Button
                    className='absolute right-2 flex size-8 bg-white/0 hover:bg-white/10'
                    aria-label='Close announcement'>
                    <X className='size-4 text-white' />
                </Button>
            </div>
        </aside>
    );
};

export default Banner;
