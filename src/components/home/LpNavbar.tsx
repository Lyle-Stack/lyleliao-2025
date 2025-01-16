import React from 'react';

import LLLogo from '../icon/LLLogo';
import SectionPadding from '../share/SectionPadding';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const LpNavbar = () => {
    return (
        <SectionPadding>
            <nav className='sticky top-0 isolate z-50 w-full bg-background py-3.5 md:py-4'>
                <div className='container relative m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6'>
                    <div className='flex justify-between'>
                        <a href='/'>
                            <LLLogo />
                        </a>
                        <Button aria-label='Open menu'>
                            <Menu />
                        </Button>
                    </div>
                    <div className='hidden w-full flex-row justify-end gap-5 md:flex'>
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
