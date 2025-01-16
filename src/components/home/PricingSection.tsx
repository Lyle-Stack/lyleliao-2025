import React from 'react';

import SectionPadding from '../share/SectionPadding';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
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
                        <Tabs defaultValue='monthly' className='flex w-fit flex-col items-center gap-8'>
                            <TabsList>
                                <TabsTrigger value='monthly'>Monthly</TabsTrigger>
                                <TabsTrigger value='annually'>Annually</TabsTrigger>
                            </TabsList>
                            <div className='grid w-full grid-cols-1 gap-4 md:max-w-5xl lg:grid-cols-3 lg:gap-6'>
                                {[
                                    {
                                        isSuggested: false,
                                        title: 'Basic',
                                        description: 'Perfect for individuals and small projects',
                                        mothlyPrice: '$29',
                                        annuallyPrice: '$290',
                                        features: [
                                            {
                                                title: 'Up to 5 team members',
                                                description:
                                                    'Collaborate with up to 5 team members on unlimited projects'
                                            },
                                            {
                                                title: '10GB storage space',
                                                description:
                                                    'Secure cloud storage for all your project files and assets'
                                            },
                                            {
                                                title: 'Basic analytics',
                                                description: 'Access to essential metrics and performance tracking'
                                            }
                                        ]
                                    },
                                    {
                                        isSuggested: true,
                                        title: 'Standard',
                                        description: 'Ideal for growing teams and businesses',
                                        mothlyPrice: '$49',
                                        annuallyPrice: '$490',
                                        features: [
                                            {
                                                title: 'Up to 20 team members',
                                                description: 'Scale your team with expanded collaboration capabilities'
                                            },
                                            {
                                                title: '50GB storage space',
                                                description: 'More storage for larger projects and asset libraries'
                                            },
                                            {
                                                title: 'Advanced analytics',
                                                description: 'Detailed insights with custom reporting and dashboards'
                                            },
                                            {
                                                title: 'Priority support',
                                                description: 'Get help within 24 hours from our dedicated support team'
                                            }
                                        ]
                                    },
                                    {
                                        isSuggested: false,
                                        title: 'Premium',
                                        description: 'For large enterprises and advanced needs',
                                        mothlyPrice: '$99',
                                        annuallyPrice: '$990',
                                        features: [
                                            {
                                                title: 'Unlimited team members',
                                                description: 'No limits on team size or collaboration'
                                            },
                                            {
                                                title: '250GB storage space',
                                                description: 'Enterprise-grade storage with advanced security'
                                            },
                                            {
                                                title: 'Custom analytics',
                                                description: 'Tailored analytics solutions with API access'
                                            },
                                            {
                                                title: '24/7 premium support',
                                                description:
                                                    'Round-the-clock dedicated support with 4-hour response time'
                                            },
                                            {
                                                title: 'White-labeling',
                                                description: 'Custom branding and white-label solutions'
                                            }
                                        ]
                                    }
                                ].map((info) => (
                                    <Card
                                        data-important={info.isSuggested}
                                        className='group/card data-[important=true]:border-2 data-[important=true]:border-primary lg:p-8'
                                        key={`pricing-section-card-${info.title}`}>
                                        <CardContent className='flex-col gap-8'>
                                            <CardContent className='relative flex-col gap-6'>
                                                <Badge className='absolute right-0 top-1 hidden group-data-[important=true]/card:inline-flex'>
                                                    Most popular
                                                </Badge>
                                                <div className='relative flex flex-col gap-3'>
                                                    <h3 className='text-lg font-semibold'>{info.title}</h3>
                                                    <CardDescription>{info.description}</CardDescription>
                                                </div>
                                                <TabsContent value='monthly' className='mt-0'>
                                                    <div className='flex items-end gap-0.5'>
                                                        <span className='text-4xl font-semibold'>
                                                            {info.mothlyPrice}
                                                        </span>
                                                        <span className='text-base text-muted-foreground'>/month</span>
                                                    </div>
                                                </TabsContent>
                                                <TabsContent value='annually' className='mt-0'>
                                                    <div className='flex items-end gap-0.5'>
                                                        <span className='text-4xl font-semibold'>
                                                            {info.annuallyPrice}
                                                        </span>
                                                        <span className='text-base text-muted-foreground'>/year</span>
                                                    </div>
                                                </TabsContent>
                                                <Button variant={info.isSuggested ? 'default' : 'secondary'}>
                                                    Purchase plan
                                                </Button>
                                            </CardContent>
                                            <CardContent className='flex-col gap-4'>
                                                <p className='text-sm font-medium'>What's included:</p>
                                                <div className='flex flex-col gap-4'>
                                                    {info.features.map((feat) => (
                                                        <div
                                                            className='flex items-center gap-3'
                                                            key={`pricing-section-card-feature-${feat.title}`}>
                                                            <Check className='size-5 text-primary' />
                                                            <span className='flex-1 text-sm text-muted-foreground'>
                                                                {feat.title}
                                                            </span>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <Info className='size-4 cursor-pointer text-muted-foreground opacity-70 hover:opacity-100' />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p>{feat.description}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default PricingSection;
