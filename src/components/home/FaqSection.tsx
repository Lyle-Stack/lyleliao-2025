import React from 'react';

import SectionPadding from '../share/SectionPadding';

const FaqSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='faq-heading'>
                <div className='container mx-auto flex flex-col gap-12 px-6 md:gap-16'>
                    <div className='ob2xo5kpyb g7atunrkd1 v4ol2afie6 mx-auto flex flex-col gap-5 text-left'>
                        <p className='text-sm font-semibold text-muted-foreground md:text-base'>FAQ section</p>
                        <h1 id='faq-heading' className='text-3xl font-bold text-foreground md:text-4xl'>
                            Frequently asked questions
                        </h1>
                        <p className='text-muted-foreground'>
                            We've compiled the most important information to help you get the most out of your
                            experience. Can't find what you're looking for?{' '}
                            <a href='#' className='text-primary underline'>
                                Contact us.
                            </a>
                        </p>
                    </div>
                    <div className='u1fn3lscdp flex flex-col gap-6' role='list'>
                        <div
                            className='i5uq8n2htm mnhplcxq69 yt0xyxec7p eeepeot91w flex flex-col gap-2 pt-6 md:flex-row'
                            role='listitem'>
                            <h2 className='flex-1 text-base font-medium text-foreground'>What is shadcn/ui?</h2>
                            <p className='flex-1 text-muted-foreground'>
                                The shadcn/ui is a popular, open-source UI component library for React that focuses on
                                flexibility and customization. It provides a set of accessible, customizable components
                                that you can use to build modern web applications.
                            </p>
                        </div>
                        <div
                            className='i5uq8n2htm mnhplcxq69 yt0xyxec7p eeepeot91w flex flex-col gap-2 pt-6 md:flex-row'
                            role='listitem'>
                            <h2 className='flex-1 text-base font-medium text-foreground'>
                                What is shadcn/ui kit for Figma?
                            </h2>
                            <p className='flex-1 text-muted-foreground'>
                                The shadcn/ui kit for Figma is our comprehensive design kit that brings the shadcn/ui
                                components into the Figma environment. It allows designers to create interfaces using
                                shadcn/ui components directly in Figma, ensuring consistency between design and
                                development.
                            </p>
                        </div>
                        <div
                            className='i5uq8n2htm mnhplcxq69 yt0xyxec7p eeepeot91w flex flex-col gap-2 pt-6 md:flex-row'
                            role='listitem'>
                            <h2 className='flex-1 text-base font-medium text-foreground'>
                                I'm not familiar with shadcn/ui. Can I still use this kit?
                            </h2>
                            <p className='flex-1 text-muted-foreground'>
                                Absolutely! Our kit is intuitive and comes with documentation to help you get started,
                                regardless of your familiarity with Figma or shadcn/ui.
                            </p>
                        </div>
                        <div
                            className='i5uq8n2htm mnhplcxq69 yt0xyxec7p eeepeot91w flex flex-col gap-2 pt-6 md:flex-row'
                            role='listitem'>
                            <h2 className='flex-1 text-base font-medium text-foreground'>
                                Can I create multi-brand design systems with this UI kit?
                            </h2>
                            <p className='flex-1 text-muted-foreground'>
                                Yes! Our kit is designed with multi-brand support in mind. You can easily create and
                                manage multiple styles for different brands within a single design system using Figma
                                variables.
                            </p>
                        </div>
                        <div
                            className='i5uq8n2htm mnhplcxq69 yt0xyxec7p eeepeot91w flex flex-col gap-2 pt-6 md:flex-row'
                            role='listitem'>
                            <h2 className='flex-1 text-base font-medium text-foreground'>
                                How will this kit save me time?
                            </h2>
                            <p className='flex-1 text-muted-foreground'>
                                By providing pre-built, customizable components and templates, you can skip the
                                repetitive setup work and focus on the unique aspects of your design. Our comprehensive
                                asset library and pre-built screens also help speed up your workflow. What is more you
                                can also save time on development and use shadcn/ui React library to code your designed
                                interfaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default FaqSection;
