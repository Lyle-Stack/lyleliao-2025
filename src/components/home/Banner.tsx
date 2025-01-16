import React from 'react';

import { Button } from '../ui/button';
import { ChevronsRight, X } from 'lucide-react';

const Banner = () => {
    return (
        <aside
            role='banner'
            aria-label='Product announcement'
            className='tehd0d9soe zbq86q1kqo u33y9iteac fixed mx-auto px-6'>
            <div className='lgeochkcwt ndvmgp4njj r6lt3qcnem zckmqjlbmc u1sd7lq86g ainvbwd0ct relative mx-auto flex items-center rounded-xl pr-6'>
                <a href='#' className='mckt6trn42 flex w-full cursor-pointer items-center gap-2'>
                    <span className='hwl3hi1opl text-sm hover:underline'>
                        <span className='font-semibold'>New update</span> · Pro blocks are now available in shadcn/ui
                        kit for Figma!
                    </span>
                    <ChevronsRight className='hidden size-4 md:block' />
                </a>
                <Button aria-label='Close announcement'>
                    <X /> Close
                </Button>
            </div>
        </aside>
    );
};

export default Banner;
