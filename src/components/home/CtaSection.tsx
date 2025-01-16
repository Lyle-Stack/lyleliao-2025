import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Button } from '../ui/button';

const CtaSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background' aria-labelledby='cta-heading'>
                <div className='container mx-auto'>
                    <div className='bg-primary px-6 py-16 sm:rounded-xl md:p-16'>
                        <div className='flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left'>
                            <div className='flex max-w-xl flex-col gap-4'>
                                <h2 id='cta-heading' className='text-2xl font-bold text-primary-foreground'>
                                    Action-driving headline that creates urgency
                                </h2>
                                <p className='text-primary-foreground/80'>
                                    Add one or two compelling sentences that reinforce your main value proposition and
                                    overcome final objections.
                                </p>
                            </div>
                            <div className='flex flex-col gap-3 md:flex-row'>
                                <Button
                                    aria-label='Get started with our service'
                                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/80'>
                                    Get started
                                </Button>
                                <Button aria-label='Learn more about our service'>Learn more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default CtaSection;
