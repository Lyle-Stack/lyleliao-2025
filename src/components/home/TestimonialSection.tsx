import React from 'react';

import SectionPadding from '../share/SectionPadding';

const TestimonialSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='testimonial-title'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-col gap-12'>
                        <div className='flex max-w-xl flex-col gap-4 text-center md:gap-5 md:text-left'>
                            <p className='lecjhn0qji x6htngc62p text-sm font-semibold text-muted-foreground md:text-base'>
                                Testimonial section
                            </p>
                            <h2 id='testimonial-title' className='text-3xl font-bold md:text-4xl'>
                                Social proof section title that focuses on trust and results
                            </h2>
                        </div>
                        <div className='o9iztzkcz3 flex flex-col gap-8 md:flex-row'>
                            <div className='flex flex-col gap-8'>
                                <p className='ecdib32nh2 o2n35qgicq text-center font-medium text-foreground md:text-left'>
                                    "Shadcn UI Kit for Figma has completely transformed our design process. It's
                                    incredibly intuitive and saves us so much time. The components are beautifully
                                    crafted and customizable."
                                </p>
                                <div className='flex flex-col items-center gap-5 md:flex-row'>
                                    <span className='tfis00f0k2 relative flex h-14 w-10 shrink-0 overflow-hidden rounded-full'>
                                        <img
                                            className='aspect-square size-full'
                                            alt='Lando Norris'
                                            src='https://github.com/shadcn.png'
                                        />
                                    </span>
                                    <div className='h08z0mfnud flex flex-col text-center md:text-left'>
                                        <p className='jrob98fumj text-base font-semibold text-foreground'>
                                            Lando Norris
                                        </p>
                                        <p className='jrob98fumj text-base text-muted-foreground'>
                                            Founder at Acme Inc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bghjsr92aw yurr4odfxt hidden w-[1px] bg-border'></div>
                            <div
                                data-orientation='horizontal'
                                role='none'
                                className='eh7inv29a7 h-px w-full shrink-0 bg-border'></div>
                            <div className='flex flex-col gap-8'>
                                <p className='ecdib32nh2 o2n35qgicq text-center font-medium text-foreground md:text-left'>
                                    "Shadcn UI Kit for Figma has completely transformed our design process. It's
                                    incredibly intuitive and saves us so much time. The components are beautifully
                                    crafted and customizable."
                                </p>
                                <div className='flex flex-col items-center gap-5 md:flex-row'>
                                    <span className='tfis00f0k2 relative flex h-14 w-10 shrink-0 overflow-hidden rounded-full'>
                                        <img
                                            className='aspect-square size-full'
                                            alt='Lando Norris'
                                            src='https://github.com/shadcn.png'
                                        />
                                    </span>
                                    <div className='h08z0mfnud flex flex-col text-center md:text-left'>
                                        <p className='jrob98fumj text-base font-semibold text-foreground'>
                                            Lando Norris
                                        </p>
                                        <p className='jrob98fumj text-base text-muted-foreground'>
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
