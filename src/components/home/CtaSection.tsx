import React from 'react';

import SectionPadding from '../share/SectionPadding';
import SocialLinks from '../share/SocialLinks';
import { Button } from '../ui/button';

const CtaSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background' aria-labelledby='cta-heading'>
                <div className='container mx-auto md:px-3'>
                    <div className='bg-primary px-6 py-16 sm:rounded-xl md:p-16'>
                        <div className='flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left'>
                            <div className='flex max-w-xl flex-col gap-4'>
                                <h2 id='cta-heading' className='text-2xl font-bold text-primary-foreground'>
                                    全端開發 x AI 驅動，打造您的數位未來
                                </h2>
                                <p className='text-primary-foreground/80'>
                                    熱衷於將複雜的技術轉化為簡單易用的產品，讓科技為您的生活和工作帶來便利。我的經驗與專業知識，將協助您解決各種技術挑戰，打造出符合您需求的客製化解決方案。
                                </p>
                            </div>
                            <SocialLinks className='' />
                            {/* <div className='flex flex-col gap-3 md:flex-row'>
                                <Button
                                    aria-label='Get started with our service'
                                    className='bg-primary-foreground text-primary hover:bg-primary-foreground/80'>
                                    Get started
                                </Button>
                                <Button aria-label='Learn more about our service'>Learn more</Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default CtaSection;
