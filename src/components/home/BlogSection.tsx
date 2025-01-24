import { Fragment } from 'react';

import { cn } from '@/lib/utils';

import BlogHeaderSection from '../blog/BlogHeaderSection';
import SectionPadding from '../share/SectionPadding';
import { Separator } from '../ui/separator';

const BlogSection = () => {
    return (
        <SectionPadding>
            <section className='py-16 md:py-24' aria-labelledby='blog-section-2-heading'>
                <div className='mx-auto px-3'>
                    <div className='flex flex-col items-start gap-12'>
                        <BlogHeaderSection />
                        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6' role='list'>
                            {[
                                {
                                    time: 'Aug 17, 2024',
                                    cat: 'Point of View',
                                    title: 'Strategize Your Life，策畫你的人生，一篇 HBR (哈佛商業評論)文章',
                                    author: 'Lyle 仲逸',
                                    imgSrc: '/images/lyle-avatar.jpg',
                                    href: '/blog/strategize-life',
                                    role: 'AI Automation x Website Builder',
                                    desc: '花費許多時間，很難找到有滿意的。更多是推銷書籍與課程的內容。我對這些廣告並不反感，因為真的需要一探究竟。令人困惑的是，他的餅畫得太美，簡直是「買必勝」的承諾。仔細看看，也確實他們可以做麼說，因為他們給了一堆指引，一堆要改變，一堆要立即執行的事情。'
                                },
                                {
                                    time: 'Near future',
                                    cat: 'Any Category',
                                    title: '敬請期待',
                                    author: ' ',
                                    href: '',
                                    imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/RrPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWLPOy4ZNPwR4AAAAASUVORK5CYII=',
                                    role: ' ',
                                    desc: 'Comming soon'
                                },
                                {
                                    time: 'Near future',
                                    cat: 'Any Category',
                                    title: '敬請期待',
                                    author: ' ',
                                    href: '',
                                    imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/RrPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWLPOy4ZNPwR4AAAAASUVORK5CYII=',
                                    role: ' ',
                                    desc: 'Comming soon'
                                }
                            ].map((item, index) => (
                                <Fragment key={`blog-list-${index}`}>
                                    <a
                                        href={item.href}
                                        className={cn(
                                            'group/card group bg-card text-card-foreground flex cursor-pointer flex-col gap-3 rounded-none border border-none',
                                            !item.href && 'cursor-default'
                                        )}
                                        role='listitem'>
                                        <div className='text-muted-foreground text-sm'>
                                            {item.time} · {item.cat}
                                        </div>
                                        <h3
                                            className={cn(
                                                'text-base font-semibold',
                                                item.href && 'group-hover/card:underline'
                                            )}>
                                            {item.title}
                                        </h3>
                                        <p className='text-muted-foreground my-auto line-clamp-3 text-sm'>
                                            {item.desc}
                                        </p>
                                        <div className='flex items-center gap-4 pt-1 md:pt-2'>
                                            <span className='size-10 shrink-0 grow-0 overflow-hidden rounded-full'>
                                                <img
                                                    className='size-full object-cover'
                                                    alt={item.author}
                                                    src={item.imgSrc}
                                                />
                                            </span>
                                            <div className='text-sm'>
                                                <p className='text-foreground font-medium'>{item.author}</p>
                                                <p className='text-muted-foreground'>{item.role}</p>
                                            </div>
                                        </div>
                                    </a>

                                    <Separator className='last:hidden lg:hidden' />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogSection;
