import React from 'react';

import SectionPadding from '../share/SectionPadding';

const FaqSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full py-16 md:py-24' aria-labelledby='faq-heading'>
                <div className='mx-auto flex flex-col gap-12 px-3 md:gap-16'>
                    <div className='mx-auto flex w-full flex-col gap-5 text-left md:max-w-xl md:text-center'>
                        <p className='text-muted-foreground text-sm font-semibold md:text-base'>FAQ section</p>
                        <h1 id='faq-heading' className='text-foreground text-3xl font-bold md:text-4xl'>
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
                    <div className='flex flex-col gap-6 md:gap-8' role='list'>
                        {[
                            {
                                question: 'What is shadcn/ui?',
                                answer: `The shadcn/ui is a popular, open-source UI component library for React that focuses on
                                flexibility and customization. It provides a set of accessible, customizable components
                                that you can use to build modern web applications.`
                            },
                            {
                                question: 'What is shadcn/ui kit for Figma?',
                                answer: `The shadcn/ui kit for Figma is our comprehensive design kit that brings the shadcn/ui
                                components into the Figma environment. It allows designers to create interfaces using
                                shadcn/ui components directly in Figma, ensuring consistency between design and
                                development.`
                            },
                            {
                                question: "I'm not familiar with shadcn/ui. Can I still use this kit?",
                                answer: `Absolutely! Our kit is intuitive and comes with documentation to help you get started,
                                regardless of your familiarity with Figma or shadcn/ui.`
                            },
                            {
                                question: 'Can I create multi-brand design systems with this UI kit?',
                                answer: `Yes! Our kit is designed with multi-brand support in mind. You can easily create and
                                manage multiple styles for different brands within a single design system using Figma
                                variables.`
                            },
                            {
                                question: 'How will this kit save me time?',
                                answer: `By providing pre-built, customizable components and templates, you can skip the
                                repetitive setup work and focus on the unique aspects of your design. Our comprehensive
                                asset library and pre-built screens also help speed up your workflow. What is more you
                                can also save time on development and use shadcn/ui React library to code your designed
                                interfaces.`
                            }
                        ].map(({ question, answer }, index) => (
                            <div
                                key={`faq-section-${index}`}
                                className='border-border flex flex-col gap-2 border-t pt-6 md:flex-row md:gap-6 md:pt-8'
                                role='listitem'>
                                <h2 className='text-foreground flex-1 text-base font-medium'>{question}</h2>
                                <p className='text-muted-foreground flex-1'>{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default FaqSection;
