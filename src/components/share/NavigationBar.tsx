'use client';

import { useState } from 'react';

import Link from 'next/link';

import LLLogo from '@/components/icon/LLLogo';
import SectionPadding from '@/components/share/SectionPadding';
import ThemeSwitch from '@/components/share/ThemeSwitch';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { NAVIGATION_LINKS } from '@/constant/navigation';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';

// ? https://john.design/journal/nav-show-hide
/** Define variants for the parent container styles **/
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
            className='sticky right-0 top-0 isolate z-50 border-b border-border/50 bg-background/10 py-3.5 backdrop-blur md:py-4'
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
                        className='flex w-full items-center justify-between gap-6 px-6'
                        variants={childVariants}
                        transition={{
                            ease: transitionEase,
                            duration: 0.4
                        }}>
                        <LLLogo />
                        <div className='flex flex-row flex-nowrap items-center gap-2'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant='ghost' size='icon' className='md:hidden [&_svg]:size-8'>
                                        <Menu size={40} />
                                        <span className='sr-only'>Toggle Menu</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your account and
                                            remove your data from our servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            <div className='hidden flex-row flex-nowrap items-center gap-2 pr-2 md:flex'>
                                {NAVIGATION_LINKS.map((link) => (
                                    <Link key={link.name} href={link.href} aria-description={link.desc}>
                                        <Button variant='ghost'>{link.name}</Button>
                                    </Link>
                                ))}
                            </div>
                            <ThemeSwitch />
                        </div>
                    </motion.div>
                </div>
            </SectionPadding>
        </motion.nav>
    );
};

export default NavigationBar;
