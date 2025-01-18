import type { ReactNode } from 'react';

import BlogArticleAside from '@/components/blog/BlogArticleAside';
import BlogPostHeaderSection from '@/components/blog/BlogPostHeaderSection';
import SectionPadding from '@/components/share/SectionPadding';

import './post.css';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <SectionPadding>
            <section>
                <div className='blog container mx-auto px-3'>
                    <BlogPostHeaderSection />
                    <article
                        className='relative flex flex-row justify-center gap-12 border-x border-border px-4'
                        aria-labelledby='article-title'>
                        <main>{children}</main>
                        <BlogArticleAside />
                    </article>
                </div>
            </section>
        </SectionPadding>
    );
};

export default Layout;
