import SectionPadding from '../share/SectionPadding';
import SocialLinks from '../share/SocialLinks';
import { AspectRatio } from '../ui/aspect-ratio';
import HeroImageBase64 from './HeroImageBase64';
import { Check, ChevronsUp, X } from 'lucide-react';
import { RoughNotation } from 'react-rough-notation';

const HeroSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background pt-8 lg:pt-16' aria-labelledby='hero-heading'>
                <div className='container mx-auto flex flex-col items-center justify-center gap-12 px-3 lg:flex-row lg:gap-0'>
                    <div className='flex max-w-3xl flex-1 flex-col gap-8'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-xs font-semibold text-muted-foreground lg:text-base' aria-hidden='true'>
                                經驗豐富的全端工程師，專精
                                <RoughNotation type='underline' show={true} animationDelay={0} iterations={1}>
                                    React
                                </RoughNotation>
                                <span> 及 </span>
                                <RoughNotation type='underline' show={true} animationDelay={600} iterations={1}>
                                    AI Automation Agent
                                </RoughNotation>
                            </p>
                            <h1 id='hero-heading' className='text-3xl font-bold text-foreground md:text-5xl'>
                                <RoughNotation type='highlight' show={true} animationDelay={1200} iterations={1}>
                                    <span className='text-primary'>Lyle 成就您</span>
                                </RoughNotation>
                                <br />
                                <span className='leading-snug'>用科技解鎖無限可能</span>
                            </h1>
                            <p className='text-base text-muted-foreground lg:text-lg'>
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
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    還在為繁瑣的工作煩惱嗎？
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <ChevronsUp className='size-5 text-amber-700' />
                                </div>
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    想讓您的業務更上一層樓嗎？
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <Check className='size-5 text-emerald-700' />
                                </div>
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    讓 AI 成為您的最佳助手！
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 sm:flex-row'>
                            {/* <Button className='font-semibold'>Get started</Button>
                            <Button className='font-semibold' variant='ghost'>
                                Get started
                                <ArrowRight />
                            </Button> */}
                            <SocialLinks />
                        </div>
                    </div>
                    <div className='w-full max-w-72 flex-1'>
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
