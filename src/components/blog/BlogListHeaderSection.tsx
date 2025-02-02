import React, { ComponentProps } from 'react';

import BlockHeaderSection from '../share/BlockHeaderSection';
import SectionPadding from '../share/SectionPadding';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '../ui/breadcrumb';
import BlogListGenreSwitch from './BlogListGenreSwitch';

type Props = {
    headerContent?: ComponentProps<typeof BlockHeaderSection>;
    genreSwitchContent?: ComponentProps<typeof BlogListGenreSwitch>;
};

const BlogListHeaderSection = ({ headerContent = {}, genreSwitchContent = {} }: Props) => {
    return (
        <SectionPadding>
            <section className='bg-background w-full pt-4 pb-16 lg:pb-24' aria-labelledby='page-heading'>
                <div className='mx-auto flex flex-col gap-8 px-3 lg:gap-16'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <BlogListGenreSwitch {...genreSwitchContent} />
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <BlockHeaderSection {...headerContent} />
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogListHeaderSection;
