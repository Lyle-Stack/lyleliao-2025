import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Separator } from '../ui/separator';

const TestimonialSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='testimonial-title'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-col gap-12'>
                        <div className='flex max-w-xl flex-col gap-4 text-center md:gap-5 md:text-left'>
                            <p className='text-sm font-semibold leading-5 text-muted-foreground md:text-base md:leading-6'>
                                Testimonial section
                            </p>
                            <h2 id='testimonial-title' className='text-3xl font-bold md:text-4xl'>
                                Social proof section title that focuses on trust and results
                            </h2>
                        </div>
                        <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
                            <div className='flex flex-col gap-8'>
                                <p className='text-center text-lg font-medium leading-7 text-foreground md:text-left'>
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
                                        <p className='text-base font-semibold leading-6 text-foreground'>
                                            Lando Norris
                                        </p>
                                        <p className='text-base leading-6 text-muted-foreground'>
                                            Founder at Acme Inc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* TODO: Add separator style */}
                            <Separator orientation='vertical' className='hidden min-h-full self-stretch md:block' />
                            <Separator orientation='horizontal' className='md:hidden' />
                            <div className='flex flex-col gap-8'>
                                <p className='text-center text-lg font-medium leading-7 text-foreground md:text-left'>
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
                                        <p className='text-base font-semibold leading-6 text-foreground'>
                                            Lando Norris
                                        </p>
                                        <p className='text-base leading-6 text-muted-foreground'>
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
