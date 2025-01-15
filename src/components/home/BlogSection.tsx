import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Separator } from '../ui/separator';

const BlogSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='blog-section-2-heading'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-col items-start gap-12'>
                        <div className='flex max-w-xl flex-col items-start gap-4 text-left md:gap-5'>
                            <p className='text-base font-semibold text-muted-foreground md:text-sm'>Blog section</p>
                            <h2 id='blog-section-2-heading' className='text-3xl font-bold leading-tight md:text-4xl'>
                                Short and clear engaging headline for a blog
                            </h2>
                            <p className='text-base text-muted-foreground'>
                                Add a concise value statement that captures reader interest and previews content value.
                                Focus on benefits while keeping it under two lines. Align with your blog categories.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6' role='list'>
                            <div
                                className='group flex cursor-pointer flex-col justify-between rounded-none border border-none bg-card text-card-foreground'
                                role='listitem'>
                                <div className='flex flex-col gap-3 p-0'>
                                    <div className='flex items-center gap-2 text-left'>
                                        <span className='text-sm text-muted-foreground'>Mar 15, 2024</span>
                                        <span className='text-sm text-muted-foreground'>·</span>
                                        <span className='text-sm text-muted-foreground'>Tutorial</span>
                                    </div>
                                    <h3 className='text-base font-semibold leading-normal hover:underline'>
                                        Getting Started with shadcn/ui: A Complete Guide
                                    </h3>
                                    <p className='text-sm leading-normal text-muted-foreground'>
                                        Learn how to set up and maximize your development workflow with shadcn/ui's
                                        powerful component library.
                                    </p>
                                </div>
                                <div className='mt-4 flex items-center gap-2 p-0 md:mt-6'>
                                    <span className='relative flex size-10 shrink-0 overflow-hidden rounded-full'>
                                        <img className='aspect-square size-full' src='https://github.com/shadcn.png' />
                                    </span>
                                    <div className='flex flex-1 flex-col items-start gap-0'>
                                        <p className='text-sm font-medium text-foreground'>John Doe</p>
                                        <p className='text-sm text-muted-foreground'>Developer</p>
                                    </div>
                                </div>
                            </div>
                            <Separator className='lg:hidden' />
                            <div
                                className='group flex cursor-pointer flex-col justify-between rounded-none border border-none bg-card text-card-foreground'
                                role='listitem'>
                                <div className='flex flex-col gap-3 p-0'>
                                    <div className='flex items-center gap-2 text-left'>
                                        <span className='text-sm text-muted-foreground'>Mar 12, 2024</span>
                                        <span className='text-sm text-muted-foreground'>·</span>
                                        <span className='text-sm text-muted-foreground'>Development</span>
                                    </div>
                                    <h3 className='text-base font-semibold leading-normal hover:underline'>
                                        Building Dark Mode with Next.js and Tailwind CSS
                                    </h3>
                                    <p className='text-sm leading-normal text-muted-foreground'>
                                        Implement a seamless dark mode toggle in your Next.js application using Tailwind
                                        CSS and shadcn/ui.
                                    </p>
                                </div>
                                <div className='mt-4 flex items-center gap-2 p-0 md:mt-6'>
                                    <span className='relative flex size-10 shrink-0 overflow-hidden rounded-full'>
                                        <img className='aspect-square size-full' src='https://github.com/shadcn.png' />
                                    </span>
                                    <div className='flex flex-1 flex-col items-start gap-0'>
                                        <p className='text-sm font-medium text-foreground'>Jane Smith</p>
                                        <p className='text-sm text-muted-foreground'>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <Separator className='lg:hidden' />
                            <div
                                className='group flex cursor-pointer flex-col justify-between rounded-none border border-none bg-card text-card-foreground'
                                role='listitem'>
                                <div className='flex flex-col gap-3 p-0'>
                                    <div className='flex items-center gap-2 text-left'>
                                        <span className='text-sm text-muted-foreground'>Mar 8, 2024</span>
                                        <span className='text-sm text-muted-foreground'>·</span>
                                        <span className='text-sm text-muted-foreground'>Advanced</span>
                                    </div>
                                    <h3 className='text-base font-semibold leading-normal hover:underline'>
                                        Mastering React Server Components
                                    </h3>
                                    <p className='text-sm leading-normal text-muted-foreground'>
                                        Deep dive into React Server Components and learn how they can improve your
                                        application's performance.
                                    </p>
                                </div>
                                <div className='mt-4 flex items-center gap-2 p-0 md:mt-6'>
                                    <span className='relative flex size-10 shrink-0 overflow-hidden rounded-full'>
                                        <img className='aspect-square size-full' src='https://github.com/shadcn.png' />
                                    </span>
                                    <div className='flex flex-1 flex-col items-start gap-0'>
                                        <p className='text-sm font-medium text-foreground'>Alice Johnson</p>
                                        <p className='text-sm text-muted-foreground'>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogSection;
