import React from 'react';

import Facebook from '../icon/Facebook';
import Instagram from '../icon/Instagram';
import LLLogo from '../icon/LLLogo';
import Twitter from '../icon/Twitter';
import WhatsApp from '../icon/WhatsApp';
import YouTube from '../icon/YouTube';
import SectionPadding from './SectionPadding';

const Footer = () => {
    return (
        <SectionPadding>
            <footer className='w-full bg-background py-16 lg:py-24' role='contentinfo' aria-label='Site footer'>
                <div className='container mx-auto flex flex-col gap-12 px-6 lg:gap-16'>
                    <div className='relative flex flex-col items-center gap-12 md:items-center md:justify-between lg:flex-row lg:gap-8'>
                        <a href='/'>
                            <LLLogo />
                        </a>
                        <nav
                            className='flex flex-col items-center gap-6 md:gap-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-row'
                            aria-label='Footer navigation'>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Home
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                About Us
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Services
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Contact Us
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                FAQ
                            </a>
                        </nav>
                        <div className='flex justify-center gap-4 md:gap-6' aria-label='Social media links'>
                            <a href='#' className='transition-all duration-300 hover:scale-110'>
                                <Facebook />
                            </a>
                            <a href='#' className='transition-all duration-300 hover:scale-110'>
                                <Instagram />
                            </a>
                            <a href='#' className='transition-all duration-300 hover:scale-110'>
                                <Twitter />
                            </a>
                            <a href='#' className='transition-all duration-300 hover:scale-110'>
                                <YouTube />
                            </a>
                            <a href='#' className='transition-all duration-300 hover:scale-110'>
                                <WhatsApp />
                            </a>
                        </div>
                    </div>
                    <div
                        data-orientation='horizontal'
                        role='presentation'
                        className='h-px w-full shrink-0 bg-border'></div>
                    <div className='gug41ro6dg flex flex-col items-center justify-between gap-12 text-center md:gap-6 lg:flex-row'>
                        <p className='s8bgy2liyi hd0298e7d2 text-muted-foreground'>
                            <span>Copyright © 2025</span>{' '}
                            <a href='/' className='hover:underline'>
                                shadcndesign.com
                            </a>
                            . All rights reserved.
                        </p>
                        <nav
                            className='zf0lo5lgh3 xhthgfdz75 m9vwlaus90 flex flex-col items-center gap-6 text-center md:flex-row'
                            aria-label='Legal links'>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Privacy Policy
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Terms of Service
                            </a>
                            <a href='#' className='text-muted-foreground transition-colors hover:text-foreground'>
                                Cookies Settings
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        </SectionPadding>
    );
};

export default Footer;
