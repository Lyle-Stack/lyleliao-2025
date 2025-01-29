import Link from 'next/link';

import SectionPadding from '../share/SectionPadding';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import HeroImageBase64 from './HeroImageBase64';
import { ArrowRight, Check, ChevronsUp, X } from 'lucide-react';
import { RoughNotation } from 'react-rough-notation';

const HeroSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full pt-8 lg:pt-16' aria-labelledby='hero-heading'>
                <div className='relative mx-auto flex flex-col items-center justify-center gap-12 overflow-clip px-3 md:flex-row md:gap-0'>
                    <div className='flex max-w-prose flex-1 flex-col gap-8 xl:max-w-3xl'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-muted-foreground text-xs font-semibold lg:text-base' aria-hidden='true'>
                                經驗豐富的全端工程師，專精
                                <RoughNotation
                                    type='underline'
                                    show={true}
                                    animationDelay={0}
                                    animationDuration={400}
                                    iterations={1}>
                                    React
                                </RoughNotation>
                                <span> 及 </span>
                                <RoughNotation type='underline' show={true} animationDelay={300} iterations={1}>
                                    AI Automation Agent
                                </RoughNotation>
                            </p>
                            <h1 id='hero-heading' className='text-foreground text-3xl font-bold md:text-5xl'>
                                <RoughNotation
                                    type='highlight'
                                    color='var(--md-sys-color-inverse-surface)'
                                    show={true}
                                    animationDelay={900}
                                    iterations={1}>
                                    <span className='text-(--md-sys-color-inverse-primary)'>Lyle 成就您</span>
                                </RoughNotation>
                                <br />
                                <span className='leading-snug'>用科技解鎖無限可能</span>
                            </h1>
                            <p className='text-muted-foreground text-base text-balance lg:text-lg'>
                                Lyle 提供 AI
                                自動化、網頁開發等服務，協助您將更多時間投入到更有價值的事情上，解放自己的時間。無論您是需要一個全新的網站，還是想優化現有的工作流程，Lyle
                                都能滿足您的需求。
                            </p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <X className='size-5 text-amber-700' />
                                </div>
                                <span className='text-card-foreground text-base leading-5 font-semibold'>
                                    還在為繁瑣的工作煩惱嗎？
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <ChevronsUp className='size-5 text-amber-700' />
                                </div>
                                <span className='text-card-foreground text-base leading-5 font-semibold'>
                                    想讓您的業務更上一層樓嗎？
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <Check className='size-5 text-emerald-700' />
                                </div>
                                <span className='text-card-foreground text-base leading-5 font-semibold'>
                                    讓 AI 成為您的最佳助手！
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 sm:flex-row'>
                            <Button asChild className='z-10 font-semibold'>
                                <Link href='/blog'>
                                    前往部落格
                                    <ArrowRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className='absolute -right-10 bottom-0 size-48 sm:right-0 md:static md:mt-auto md:mb-10 md:inline-block md:size-60 lg:size-72'>
                        <AspectRatio>
                            <HeroImageBase64 />
                        </AspectRatio>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default HeroSection;
