import Link from 'next/link';

import { cn } from '@/lib/utils';

import BlogHeaderSection from '../blog/BlogHeaderSection';
import SectionPadding from '../share/SectionPadding';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const BlogSection = () => {
    return (
        <SectionPadding>
            <section className='py-16 md:py-24' aria-labelledby='blog-section-2-heading'>
                <div className='mx-auto px-3'>
                    <div className='flex flex-col items-start gap-12'>
                        <BlogHeaderSection />
                        <div className='grid grid-cols-1 lg:grid-cols-3' role='list'>
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
                                <Card
                                    key={`blog-list-${index}`}
                                    className='flex flex-col justify-start gap-2 lg:h-full'>
                                    <Link href={item.href} className='group/card'>
                                        <CardHeader className={cn('cursor-pointer', !item.href && 'cursor-default')}>
                                            <p>
                                                {item.time} · {item.cat}
                                            </p>
                                            <CardTitle className={cn(item.href && 'group-hover/card:underline')}>
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardDescription className='line-clamp-3 flex-1'>{item.desc}</CardDescription>
                                        <CardFooter className='justify-start gap-4 pt-2'>
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
                                        </CardFooter>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogSection;
