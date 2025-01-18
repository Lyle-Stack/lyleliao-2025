'use client';

import { useState } from 'react';

import { Button } from '../ui/button';
import { ChevronsRight, X } from 'lucide-react';

const Banner = () => {
    const [show, setShow] = useState(true);

    return (
        <aside
            role='banner'
            aria-label='Product announcement'
            aria-hidden={!show}
            className='fixed inset-x-0 top-2.5 z-50 mx-auto translate-y-0 px-6 opacity-100 transition-all duration-300 ease-in aria-hidden:-translate-y-48 aria-hidden:opacity-30 md:top-20'>
            <div className='relative mx-auto flex max-w-5xl items-center rounded-md bg-foreground py-1.5 pl-4 pr-12 shadow-lg md:py-2.5'>
                <span className='flex w-full items-center justify-start gap-2 py-1.5 text-white'>
                    <span className='text-sm hover:underline'>
                        <span className='font-semibold'>全新上線</span> ✨ Lyle 個人頁更新，持續更新中···
                        將移植其他內容到這裡，敬請期待 😏
                    </span>
                    {/* <ChevronsRight className='hidden size-4 md:block' /> */}
                </span>
                <Button
                    className='absolute right-2 flex size-8 bg-white/0 hover:bg-white/10'
                    size='icon'
                    aria-label='Close announcement'
                    onClick={() => setShow(false)}>
                    <X className='size-4 text-white' />
                </Button>
            </div>
        </aside>
    );
};

export default Banner;
