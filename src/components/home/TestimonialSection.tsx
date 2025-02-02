import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Separator } from '../ui/separator';

const TestimonialSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full py-16 md:py-24' aria-labelledby='testimonial-title'>
                <div className='mx-auto px-3'>
                    <div className='flex flex-col gap-12'>
                        <div className='flex max-w-xl flex-col gap-4 text-center md:gap-5 md:text-left'>
                            <p className='text-muted-foreground text-sm leading-5 font-semibold md:text-base md:leading-6'>
                                Testimonial section
                            </p>
                            <h2 id='testimonial-title' className='text-3xl font-bold md:text-4xl'>
                                Social proof section title that focuses on trust and results
                            </h2>
                        </div>
                        <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
                            <div className='flex flex-col gap-8'>
                                <p className='text-foreground text-center text-lg leading-7 font-medium md:text-left'>
                                    "Shadcn UI Kit for Figma has completely transformed our design process. It's
                                    incredibly intuitive and saves us so much time. The components are beautifully
                                    crafted and customizable."
                                </p>
                                <div className='flex flex-col items-center gap-5 md:flex-row'>
                                    <span className='relative flex size-14 w-10 shrink-0 overflow-hidden rounded-full'>
                                        <img
                                            className='aspect-square size-full'
                                            alt='Lando Norris'
                                            src='https://github.com/shadcn.png'
                                        />
                                    </span>
                                    <div className='flex flex-col gap-1 text-center md:text-left'>
                                        <p className='text-foreground text-base leading-6 font-semibold'>
                                            Lando Norris
                                        </p>
                                        <p className='text-muted-foreground text-base leading-6'>
                                            Founder at Acme Inc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* TODO: Add separator style */}
                            <Separator orientation='vertical' className='hidden min-h-full self-stretch md:block' />
                            <Separator orientation='horizontal' className='md:hidden' />
                            <div className='flex flex-col gap-8'>
                                <p className='text-foreground text-center text-lg leading-7 font-medium md:text-left'>
                                    "Shadcn UI Kit for Figma has completely transformed our design process. It's
                                    incredibly intuitive and saves us so much time. The components are beautifully
                                    crafted and customizable."
                                </p>
                                <div className='flex flex-col items-center gap-5 md:flex-row'>
                                    <span className='relative flex size-14 w-10 shrink-0 overflow-hidden rounded-full'>
                                        <img
                                            className='aspect-square size-full'
                                            alt='Lando Norris'
                                            src='https://github.com/shadcn.png'
                                        />
                                    </span>
                                    <div className='flex flex-col gap-1 text-center md:text-left'>
                                        <p className='text-foreground text-base leading-6 font-semibold'>
                                            Lando Norris
                                        </p>
                                        <p className='text-muted-foreground text-base leading-6'>
                                            Founder at Acme Inc.
                                        </p>
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

export default TestimonialSection;
