import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '../ui/breadcrumb';
import SectionPadding from './SectionPadding';

const HeaderSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full pt-4 pb-16 lg:pb-24' aria-labelledby='page-heading'>
                <div className='relative z-10 mx-auto flex flex-col gap-8 px-3 lg:gap-16'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Posts</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className='flex max-w-xl flex-1 flex-col gap-6 lg:gap-8'>
                        <div className='flex flex-col gap-4 lg:gap-5'>
                            <p className='text-muted-foreground text-sm font-semibold lg:text-base' aria-hidden='true'>
                                Blog
                            </p>
                            <h1 id='page-heading' className='text-foreground text-3xl font-bold md:text-5xl'>
                                精采好文 開拓視野
                            </h1>
                            <p
                                className='text-muted-foreground text-base lg:text-lg'
                                aria-description='page description'>
                                為你的工作、生活、學習提供有用的資訊與技巧，讓你的生活更加美好
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default HeaderSection;
