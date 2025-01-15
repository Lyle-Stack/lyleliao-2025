import SectionPadding from '../share/SectionPadding';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-24' aria-labelledby='hero-heading'>
                <div className='container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16'>
                    <div className='flex flex-1 flex-col gap-8'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-xs font-semibold text-muted-foreground lg:text-base' aria-hidden='true'>
                                Hero section
                            </p>
                            <h1 id='hero-heading' className='text-3xl font-bold text-foreground md:text-5xl'>
                                Headline that solves user's <span className='text-primary'>main problem</span>
                            </h1>
                            <p className='text-base text-muted-foreground lg:text-lg'>
                                Follow with one or two sentences that expand on your value proposition. Focus on key
                                benefits and address why users should take action now. Keep it scannable, short and
                                benefit-driven.
                            </p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <Check className='size-5 text-primary' />
                                </div>
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    Benefit driven feature title
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <Check className='size-5 text-primary' />
                                </div>
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    Benefit driven feature title
                                </span>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='pt-0.5'>
                                    <Check className='size-5 text-primary' />
                                </div>
                                <span className='text-base font-semibold leading-5 text-card-foreground'>
                                    Benefit driven feature title
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 sm:flex-row'>
                            <Button className='font-semibold'>Get started</Button>
                            <Button className='font-semibold' variant='ghost'>
                                Get started
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                    <div className='w-full flex-1'>
                        <AspectRatio>
                            <img
                                src='https://ui.shadcn.com/placeholder.svg'
                                className='size-full rounded-lg object-cover'
                            />
                        </AspectRatio>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default HeroSection;
