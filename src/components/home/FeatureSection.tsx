import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { ArrowRight, Rocket, X } from 'lucide-react';

const FeatureSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full py-16 md:py-24'>
                <div className='mx-auto flex flex-col gap-12 px-3 md:gap-16'>
                    <div className='mx-auto flex flex-col gap-4 md:gap-5 lg:text-center'>
                        <p className='text-muted-foreground text-sm font-semibold md:text-base'>
                            Features that Benefit You
                        </p>
                        <h2 className='text-foreground flex flex-wrap items-baseline gap-2 text-3xl font-bold whitespace-nowrap md:text-4xl'>
                            AI Automation <X /> Website Builder <X /> AI Agent
                        </h2>
                        <p className='text-muted-foreground text-base'>
                            用熱情與專業，為您的專案注入新的活力，創造出令人驚豔的成果
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6'>
                        {[
                            {
                                title: 'AI Automation: 自動化重複性任務 提升工作效率。',
                                desc: `讓 AI 成為您的最佳助手！ Lyle 提供 AI 自動化流程設計、AI 提示詞教學等服務，協助您將 AI 技術應用於日常工作中。無論是簡化重複性任務，還是提升工作效率，Lyle 都能為您提供客製化的 AI 解決方案。`
                            },
                            {
                                title: '客製化開發: 根據您的需求 打造專屬的解決方案',
                                desc: `想讓您的業務更上一層樓嗎？ Lyle 提供專業的網頁開發、網站架設服務。無論您是小型企業或個人使用者，將您的想法轉化為現實，為您的客戶打造獨一無二的數位體驗。`
                            },
                            {
                                title: 'AI 賦能: 運用 AI 技術 實現自動化與智慧化。',
                                desc: `還在為繁瑣的工作煩惱嗎？ 為自己打造一個更智能的工作環境，無論您是需要一個全新的網站，還是想優化現有的工作流程，Lyle 都能滿足您的需求。`
                            }
                        ].map((feature, index) => (
                            <div className='flex flex-col gap-5' key={`feature-section-${index}`}>
                                <div className='bg-muted flex size-10 shrink-0 items-center justify-center rounded-md border shadow-xs'>
                                    <Rocket className='text-primary size-5' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-foreground font-semibold'>{feature.title}</h3>
                                    <p className='text-muted-foreground'>{feature.desc}</p>
                                </div>
                                {/* <a
                                href='#'
                                className='flex items-center gap-2 font-medium text-primary hover:text-primary/90'>
                                Learn more
                                <ArrowRight className='size-4' />
                            </a> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default FeatureSection;
