import { JSX } from 'react';

import { File, House, Newspaper } from 'lucide-react';

export type NavigationLink = {
    name: string;
    href: string;
    desc: string;
    icon: JSX.Element;
    titleInNotFound: string;
    descInNotFound: string;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
    {
        name: 'Home',
        href: '/',
        desc: '重新探索 Lyle',
        icon: <House className='size-5' />,
        titleInNotFound: '回到首頁',
        descInNotFound: '重新探索 Lyle'
    },
    // {
    //     name: 'Doc',
    //     href: '/doc',
    //     desc: 'Learn more about our features and capabilities',
    //     icon: <File className='size-5' />,
    //     titleInNotFound: 'Read our documentation',
    //     descInNotFound: 'Learn more about our features and capabilities'
    // },
    {
        name: 'Blog',
        href: '/blog',
        desc: '提供工作、生活、學習有用的資訊與技巧，讓生活更加美好',
        icon: <Newspaper className='size-5' />,
        titleInNotFound: '逛逛 Lyle 的精采好文',
        descInNotFound: '提供工作、生活、學習有用的資訊與技巧，讓生活更加美好'
    }
];

export const randomTextEmoji = [
    '\\(o_o)/',
    '(o^^)o',
    '(^-^*)',
    '(>_<)',
    '(·_·)',
    '(≥o≤)',
    '(≥o≤)',
    '(;-;)',
    '(^_^)b',
    "(='X'=)",
    '\\(^Д^)/',
    '(·.·)'
];
