'use client';

import { useState } from 'react';

import Link from 'next/link';

import LLLogo from '@/components/icon/LLLogo';
import SectionPadding from '@/components/share/SectionPadding';
import ThemeSwitch from '@/components/share/ThemeSwitch';
import { buttonVariants } from '@/components/ui/button';
import { NAVIGATION_LINKS } from '@/constant/navigation';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '../ui/sheet';
import SocialLinks from './SocialLinks';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';

// ? https://john.design/journal/nav-show-hide
/** Define variants for the parent styles **/
const parentVariants = {
    /** Define the "visible" state and its styles **/
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: '-4.5rem' }
};

/** Variants for the child container styles **/
const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-2.25rem' }
};

const transitionEase = [0.1, 0.25, 0.3, 1] as const;

const NavigationBar = () => {
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);

    function update(latest: number, prev: number): void {
        if (latest < prev) setHidden(false);
        else if (latest > 100 && latest > prev) setHidden(true);
    }

    useMotionValueEvent(scrollY, 'change', (latest: number) => {
        update(latest, prevScroll);
        setPrevScroll(latest);
    });

    return (
        <motion.nav
            className='border-border/50 bg-background/10 sticky top-0 right-0 isolate z-50 border-b py-3.5 backdrop-blur-sm md:py-4'
            variants={parentVariants}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{
                ease: transitionEase,
                duration: 0.6,
                staggerChildren: 0.05
            }}>
            <SectionPadding>
                <div>
                    <motion.div
                        className='flex w-full items-center justify-between px-3'
                        variants={childVariants}
                        transition={{
                            ease: transitionEase,
                            duration: 0.4
                        }}>
                        <Link href='/' aria-label='Home Page' className='py-2 pr-6' prefetch={false}>
                            <LLLogo />
                        </Link>
                        <div className='flex flex-row flex-nowrap items-center gap-2'>
                            {/* desktop menu */}
                            <div className='hidden flex-row flex-nowrap items-center gap-2 pr-2 md:flex'>
                                {NAVIGATION_LINKS.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        aria-description={link.desc}
                                        className={buttonVariants({ variant: 'ghost' })}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <ThemeSwitch />

                            {/* mobile menu */}
                            <Sheet>
                                <SheetTrigger
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon',
                                        className: 'md:hidden [&_svg]:size-8'
                                    })}>
                                    <Menu size={40} />
                                    <span className='sr-only'>Toggle Menu</span>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className='text-center'>探索其他...地方？</SheetTitle>
                                        <SheetDescription>
                                            <span className='flex flex-col gap-2 py-4'>
                                                {NAVIGATION_LINKS.map((link) => (
                                                    <SheetClose key={link.name} asChild>
                                                        <Link
                                                            href={link.href}
                                                            aria-description={link.desc}
                                                            className={buttonVariants({
                                                                variant: 'ghost',
                                                                className: 'w-full'
                                                            })}>
                                                            {link.name}
                                                        </Link>
                                                    </SheetClose>
                                                ))}
                                            </span>
                                        </SheetDescription>
                                        <SheetFooter className='sm:justify-center'>
                                            <SocialLinks />
                                        </SheetFooter>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </motion.div>
                </div>
            </SectionPadding>
        </motion.nav>
    );
};

export default NavigationBar;
