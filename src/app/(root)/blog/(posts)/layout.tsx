import type { ReactNode } from 'react';

import BlogArticleAside from '@/components/blog/BlogArticleAside';
import BlogPostHeaderSection from '@/components/blog/BlogPostHeaderSection';
import SectionPadding from '@/components/share/SectionPadding';

import './post.css';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <SectionPadding>
            <section>
                <div className='blog mx-auto px-3'>
                    <BlogPostHeaderSection
                        metadata={{
                            title: 'Strategize Your Life，策畫你的人生，一篇 HBR （哈佛商業評論）文章',
                            publishedAt: 'Aug 17, 2024',
                            summary:
                                '花費許多時間，很難找到有滿意的。更多是推銷書籍與課程的內容。我對這些廣告並不反感，因為真的需要一探究竟。令人困惑的是，他的餅畫得太美，簡直是「買必勝」的承諾。仔細看看，也確實他們可以做麼說，因為他們給了一堆指引，一堆要改變，一堆要立即執行的事情。',
                            image: '/images/strategize-life.png'
                        }}
                    />
                    <article
                        className='border-border relative flex flex-row justify-center gap-12 border-x px-4'
                        aria-labelledby='article-title'>
                        <main>{children}</main>
                        <BlogArticleAside
                            headers={[
                                {
                                    level: 2,
                                    content: '不缺向外改變的方式，而需要一個，向內看的科學方法',
                                    slug: '不缺向外改變的方式，而需要一個，向內看的科學方法'
                                },
                                {
                                    level: 2,
                                    content: '直觀的人生時間表',
                                    slug: '直觀的人生時間表'
                                },
                                {
                                    level: 3,
                                    content: '時間擠不出來？要善用時間的轉換',
                                    slug: '時間擠不出來？要善用時間的轉換'
                                }
                            ]}
                        />
                    </article>
                </div>
            </section>
        </SectionPadding>
    );
};

export default Layout;
