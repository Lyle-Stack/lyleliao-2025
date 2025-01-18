import React from 'react';

import SectionPadding from './SectionPadding';
import { ChevronRight } from 'lucide-react';

const HeaderSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background pb-16 pt-4 lg:pb-24' aria-labelledby='page-heading'>
                <div className='container relative z-10 mx-auto flex flex-col gap-8 px-3 lg:gap-16'>
                    <nav aria-label='Page navigation'>
                        <ol className='flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5'>
                            <li className='inline-flex items-center gap-1.5'>
                                <a className='transition-colors hover:text-foreground' href='#'>
                                    Home
                                </a>
                            </li>
                            <li role='presentation' aria-hidden='true' className='[&>svg]:size-3.5'>
                                <ChevronRight />
                            </li>
                            <li className='inline-flex items-center gap-1.5'>
                                <a className='transition-colors hover:text-foreground' href='#'>
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
                                    className='font-normal text-foreground'>
                                    Header Section Five
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex max-w-xl flex-1 flex-col gap-6 lg:gap-8'>
                        <div className='flex flex-col gap-4 lg:gap-5'>
                            <p className='text-sm font-semibold text-muted-foreground lg:text-base' aria-hidden='true'>
                                Header section
                            </p>
                            <h1 id='page-heading' className='text-3xl font-bold text-foreground md:text-5xl'>
                                Short engaging headline
                            </h1>
                            <p
                                className='text-base text-muted-foreground lg:text-lg'
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
