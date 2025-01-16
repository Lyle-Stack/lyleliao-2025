import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Check, Info } from 'lucide-react';

const PricingSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='pricing-section-title'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='flex max-w-xl flex-col items-center gap-4 text-center md:gap-5'>
                            <p className='text-base font-semibold text-muted-foreground'>Pricing section</p>
                            <h2 id='pricing-section-title' className='text-3xl font-bold md:text-4xl'>
                                Benefit-focused headline that highlights choice
                            </h2>
                            <p className='text-base text-muted-foreground'>
                                Add a concise value statement that addresses price sensitivity and showcases plan
                                flexibility. Focus on transformation and results while keeping it under 2 lines. Align
                                with your pricing table options.
                            </p>
                        </div>
                        <Tabs defaultValue='monthly' className='flex w-fit flex-col items-center gap-4 md:gap-5'>
                            <TabsList>
                                <TabsTrigger value='monthly'>Monthly</TabsTrigger>
                                <TabsTrigger value='annually'>Annually</TabsTrigger>
                            </TabsList>
                            <div className='grid w-full grid-cols-1 gap-4 md:max-w-5xl lg:grid-cols-3 lg:gap-6'>
                                <Card className='rounded-xl p-6 lg:p-8'>
                                    <div className='flex flex-col gap-8 p-0'>
                                        <div className='flex flex-col gap-6'>
                                            <div className='relative flex flex-col gap-3'>
                                                <h3 className='text-lg font-semibold'>Basic</h3>
                                                <p className='text-sm text-muted-foreground'>
                                                    Perfect for individuals and small projects
                                                </p>
                                            </div>
                                            <TabsContent value='monthly'>
                                                <div className='flex items-end gap-0.5'>
                                                    <span className='text-4xl font-semibold'>$29</span>
                                                    <span className='text-base text-muted-foreground'>/month</span>
                                                </div>
                                            </TabsContent>
                                            <TabsContent value='annually'>
                                                <div className='flex items-end gap-0.5'>
                                                    <span className='text-4xl font-semibold'>$290</span>
                                                    <span className='text-base text-muted-foreground'>/year</span>
                                                </div>
                                            </TabsContent>
                                            <Button variant='secondary'>Purchase plan</Button>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <p className='text-sm font-medium'>What's included:</p>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex items-center gap-3'>
                                                    <Check className='size-5 text-primary' />
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Up to 5 team members
                                                    </span>
                                                    <Info className='size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100' />
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <Check className='size-5 text-primary' />
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        10GB storage space
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about 10GB storage space'>
                                                        <Info className='size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100' />
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <Check className='size-5 text-primary' />
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Basic analytics
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Basic analytics'>
                                                        <Info className='size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <div className='zt4y81std5 amad4lmvyw rounded-xl border bg-card p-6 text-card-foreground shadow-sm lg:p-8'>
                                    <div className='flex flex-col gap-8 p-0'>
                                        <div className='flex flex-col gap-6'>
                                            <div className='relative flex flex-col gap-3'>
                                                <div className='qhwfihyfr3 d9zcucbj2q s2eb8uvr1q h3ycwtwyfk zdalnzsv7o cz3hnn3kxd pjw5enrhfm nqwzl10f6h blx1jzet3p u33y9iteac absolute inline-flex items-center rounded-full border bg-primary px-2.5 py-0.5 font-semibold text-primary-foreground transition-colors'>
                                                    Most popular
                                                </div>
                                                <h3 className='text-lg font-semibold text-primary'>Standard</h3>
                                                <p className='text-sm text-muted-foreground'>
                                                    Ideal for growing teams and businesses
                                                </p>
                                            </div>
                                            <div className='flex items-end gap-0.5'>
                                                <span className='text-4xl font-semibold'>$49</span>
                                                <span className='text-base text-muted-foreground'>/month</span>
                                            </div>
                                            <button className='k3r686zcbu k58g9qk9zh x6sv9fqmv5 inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                                                Purchase plan
                                            </button>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <p className='text-sm font-medium'>Everything in Basic, plus:</p>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Up to 20 team members
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Up to 20 team members'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        50GB storage space
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about 50GB storage space'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Advanced analytics
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Advanced analytics'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Priority support
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Priority support'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl border bg-card p-6 text-card-foreground shadow-sm lg:p-8'>
                                    <div className='flex flex-col gap-8 p-0'>
                                        <div className='flex flex-col gap-6'>
                                            <div className='relative flex flex-col gap-3'>
                                                <h3 className='text-lg font-semibold'>Premium</h3>
                                                <p className='text-sm text-muted-foreground'>
                                                    For large enterprises and advanced needs
                                                </p>
                                            </div>
                                            <div className='flex items-end gap-0.5'>
                                                <span className='text-4xl font-semibold'>$99</span>
                                                <span className='text-base text-muted-foreground'>/month</span>
                                            </div>
                                            <button className='k3r686zcbu k58g9qk9zh x6sv9fqmv5 kbvga3a4yo cr9uaf4en5 k825rn20aw inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                                                Purchase plan
                                            </button>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <p className='text-sm font-medium'>Everything in Standard, plus:</p>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Unlimited team members
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Unlimited team members'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        250GB storage space
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about 250GB storage space'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        Custom analytics
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about Custom analytics'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        24/7 premium support
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about 24/7 premium support'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className='flex items-center gap-3'>
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
                                                        className='lucide lucide-check size-5 text-primary'>
                                                        <path d='M20 6 9 17l-5-5'></path>
                                                    </svg>
                                                    <span className='flex-1 text-sm text-muted-foreground'>
                                                        White-labeling
                                                    </span>
                                                    <button
                                                        data-state='closed'
                                                        aria-label='More information about White-labeling'>
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
                                                            className='lucide lucide-info size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100'>
                                                            <circle cx='12' cy='12' r='10'></circle>
                                                            <path d='M12 16v-4'></path>
                                                            <path d='M12 8h.01'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default PricingSection;
