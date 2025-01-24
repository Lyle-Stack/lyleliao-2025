import SectionPadding from '@/components/share/SectionPadding';
import { NAVIGATION_LINKS, NavigationLink, randomTextEmoji } from '@/constant/navigation';

import { ChevronRight } from 'lucide-react';

const NotFoundCatchAll = () => {
    return (
        <main className='py-8 md:pt-16 lg:pt-24'>
            <SectionPadding>
                <section
                    className='bg-background relative flex w-full flex-col items-center overflow-hidden py-8 lg:py-12'
                    aria-labelledby='error-title'>
                    <div className='flex flex-col items-center gap-12 px-3 lg:flex-row lg:gap-16'>
                        <div className='flex flex-1 flex-col gap-6 lg:gap-8'>
                            <div className='flex flex-col gap-4 text-center md:text-left lg:gap-5'>
                                <p
                                    className='text-muted-foreground text-sm font-semibold lg:text-base'
                                    aria-label='Error code'>
                                    404
                                </p>
                                <h1 id='error-title' className='text-foreground text-3xl font-bold md:text-5xl'>
                                    {/* Page not found */}
                                    找不到頁面 {randomTextEmoji[Math.floor(Math.random() * randomTextEmoji.length)]}
                                </h1>
                                <p className='text-muted-foreground text-base lg:text-lg'>
                                    {/* Sorry, we couldn't find the page you're looking for. Here are some helpful links
                                instead: */}
                                    找不到您要的頁面嗎？
                                    <br />
                                    沒關係，看看我們為您準備的其他連結，或許會有意想不到的發現喔！
                                </p>
                            </div>
                        </div>
                        <div className='bg-muted flex w-full flex-1 flex-col gap-3 rounded-lg p-3 md:p-6'>
                            {NAVIGATION_LINKS.map((link) => (
                                <NotFountLinks key={link.href} {...link} />
                            ))}
                        </div>
                    </div>
                </section>
            </SectionPadding>
        </main>
    );
};

type NotFountLinksProps = Pick<NavigationLink, 'href' | 'descInNotFound' | 'titleInNotFound' | 'icon'>;

const NotFountLinks = ({ href, icon, descInNotFound: desc, titleInNotFound: title }: NotFountLinksProps) => {
    return (
        <a
            href={href}
            className='group hover:bg-foreground/5 flex flex-col items-center gap-5 rounded-md p-3 transition-colors md:flex-row'>
            <div className='border-border bg-background flex size-10 items-center justify-center rounded-md border shadow-xs'>
                {icon}
            </div>
            <div className='flex flex-1 flex-col gap-2 text-center md:gap-0 md:text-left'>
                <span className='text-foreground font-medium underline'>{title}</span>
                <span className='text-muted-foreground'>{desc}</span>
            </div>
            <ChevronRight className='hidden size-5 transition-transform group-hover:translate-x-1 md:block' />
        </a>
    );
};

export default NotFoundCatchAll;
