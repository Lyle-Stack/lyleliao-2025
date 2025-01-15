import React from 'react';

import SectionPadding from '../share/SectionPadding';

const FeatureSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24'>
                <div className='container mx-auto flex flex-col gap-12 px-6 md:gap-16'>
                    <div className='mx-auto flex flex-col gap-4 md:gap-5 lg:max-w-xl lg:text-center'>
                        <p className='text-sm font-semibold text-muted-foreground md:text-base'>Feature section</p>
                        <h2 className='text-3xl font-bold text-foreground md:text-4xl'>
                            Headline that shows solution's impact on user success
                        </h2>
                        <p className='text-base text-muted-foreground'>
                            Explain in one or two concise sentences how your solution transforms users' challenges into
                            positive outcomes. Focus on the end benefits that matter most to your target audience. Keep
                            it clear and compelling.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex size-10 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-rocket size-5 text-primary'>
                                    <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'></path>
                                    <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'></path>
                                    <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'></path>
                                    <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'></path>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-semibold text-foreground'>Benefit driven feature title</h3>
                                <p className='text-muted-foreground'>
                                    Shortly describe how this feature solves a specific user problem. Focus on benefits
                                    not on technical details.
                                </p>
                            </div>
                            <a
                                href='#'
                                className='flex items-center gap-2 font-medium text-primary hover:text-primary/90'>
                                Learn more
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-arrow-right size-4'>
                                    <path d='M5 12h14'></path>
                                    <path d='m12 5 7 7-7 7'></path>
                                </svg>
                            </a>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex size-10 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-rocket size-5 text-primary'>
                                    <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'></path>
                                    <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'></path>
                                    <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'></path>
                                    <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'></path>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-semibold text-foreground'>Benefit driven feature title</h3>
                                <p className='text-muted-foreground'>
                                    Shortly describe how this feature solves a specific user problem. Focus on benefits
                                    not on technical details.
                                </p>
                            </div>
                            <a
                                href='#'
                                className='flex items-center gap-2 font-medium text-primary hover:text-primary/90'>
                                Learn more
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-arrow-right size-4'>
                                    <path d='M5 12h14'></path>
                                    <path d='m12 5 7 7-7 7'></path>
                                </svg>
                            </a>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex size-10 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-rocket size-5 text-primary'>
                                    <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'></path>
                                    <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'></path>
                                    <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'></path>
                                    <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'></path>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-semibold text-foreground'>Benefit driven feature title</h3>
                                <p className='text-muted-foreground'>
                                    Shortly describe how this feature solves a specific user problem. Focus on benefits
                                    not on technical details.
                                </p>
                            </div>
                            <a
                                href='#'
                                className='flex items-center gap-2 font-medium text-primary hover:text-primary/90'>
                                Learn more
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-arrow-right size-4'>
                                    <path d='M5 12h14'></path>
                                    <path d='m12 5 7 7-7 7'></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default FeatureSection;
