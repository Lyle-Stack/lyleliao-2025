import React from 'react';

import SectionPadding from './SectionPadding';
import { ChevronRight } from 'lucide-react';

const HeaderSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full pt-4 pb-16 lg:pb-24' aria-labelledby='page-heading'>
                <div className='relative z-10 mx-auto flex flex-col gap-8 px-3 lg:gap-16'>
                    <nav aria-label='Page navigation'>
                        <ol className='text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5'>
                            <li className='inline-flex items-center gap-1.5'>
                                <a className='hover:text-foreground transition-colors' href='#'>
                                    Home
                                </a>
                            </li>
                            <li role='presentation' aria-hidden='true' className='[&>svg]:size-3.5'>
                                <ChevronRight />
                            </li>
                            <li className='inline-flex items-center gap-1.5'>
                                <a className='hover:text-foreground transition-colors' href='#'>
                                    Header Sections
                                </a>
                            </li>
                            <li role='presentation' aria-hidden='true' className='[&>svg]:size-3.5'>
                                <ChevronRight />
                            </li>
                            <li className='inline-flex items-center gap-1.5'>
                                <span
                                    role='link'
                                    aria-disabled='true'
                                    aria-current='page'
                                    className='text-foreground font-normal'>
                                    Header Section Five
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex max-w-xl flex-1 flex-col gap-6 lg:gap-8'>
                        <div className='flex flex-col gap-4 lg:gap-5'>
                            <p className='text-muted-foreground text-sm font-semibold lg:text-base' aria-hidden='true'>
                                Header section
                            </p>
                            <h1 id='page-heading' className='text-foreground text-3xl font-bold md:text-5xl'>
                                Short engaging headline
                            </h1>
                            <p
                                className='text-muted-foreground text-base lg:text-lg'
                                aria-description='page description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae
                                sodales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default HeaderSection;
