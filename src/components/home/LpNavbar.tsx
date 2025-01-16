import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const LpNavbar = () => {
    return (
        <SectionPadding>
            <nav className='p326q379gc yaz7zb3viu l49ye52zks zckmqjlbmc sg0yeae042 sticky w-full bg-background'>
                <div className='rp0hw4yydn msni5ifts7 container relative flex flex-col justify-between gap-4 px-6 md:flex-row md:gap-6'>
                    <div className='flex justify-between'>
                        <a href='/'>
                            <svg
                                width='32'
                                height='32'
                                viewBox='0 0 36 36'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className=''>
                                <g clipPath='url(#clip0_3014_8110)'>
                                    <g clipPath='url(#clip1_3014_8110)'>
                                        <rect
                                            x='4.5'
                                            y='4.5'
                                            width='27'
                                            height='27'
                                            fill='black'
                                            stroke='#4497F7'
                                            strokeWidth='2.25'></rect>
                                        <rect
                                            x='1.125'
                                            y='1.125'
                                            width='6.75'
                                            height='6.75'
                                            fill='white'
                                            stroke='#4497F7'
                                            strokeWidth='2.25'></rect>
                                        <rect
                                            x='28.125'
                                            y='1.125'
                                            width='6.75'
                                            height='6.75'
                                            fill='white'
                                            stroke='#4497F7'
                                            strokeWidth='2.25'></rect>
                                        <rect
                                            x='1.125'
                                            y='28.125'
                                            width='6.75'
                                            height='6.75'
                                            fill='white'
                                            stroke='#4497F7'
                                            strokeWidth='2.25'></rect>
                                        <rect
                                            x='28.125'
                                            y='28.125'
                                            width='6.75'
                                            height='6.75'
                                            fill='white'
                                            stroke='#4497F7'
                                            strokeWidth='2.25'></rect>
                                        <path
                                            d='M10.6875 25.3125L25.3125 10.6875'
                                            stroke='white'
                                            strokeWidth='2.25'></path>
                                        <path
                                            d='M19.6875 25.3125L25.3125 19.6875'
                                            stroke='white'
                                            strokeWidth='2.25'></path>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id='clip0_3014_8110'>
                                        <rect width='36' height='36' fill='white'></rect>
                                    </clipPath>
                                    <clipPath id='clip1_3014_8110'>
                                        <rect width='36' height='36' fill='white'></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <Button aria-label='Open menu'>
                            <Menu />
                        </Button>
                    </div>
                    <div className='u94mi7up5p lnqy1nz91d pxghgs6z3e hidden w-full gap-5'>
                        <div className='flex flex-col gap-1 md:flex-row'>
                            <a href='#'>
                                <Button className='w-full'>Products</Button>
                            </a>
                            <a href='#'>
                                <Button className='w-full'>Use cases</Button>
                            </a>
                            <a href='#'>
                                <Button className='w-full'>Docs</Button>
                            </a>
                            <a href='#'>
                                <Button className='w-full'>Pricing</Button>
                            </a>
                            <a href='#'>
                                <Button className='w-full'>FAQ</Button>
                            </a>
                        </div>
                        <a href='#'>
                            <Button className='w-full'>Get started</Button>
                        </a>
                    </div>
                </div>
            </nav>
        </SectionPadding>
    );
};

export default LpNavbar;
