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
        desc: 'Return to our main page to start fresh',
        icon: <House className='size-5' />,
        titleInNotFound: 'Go back to homepage',
        descInNotFound: 'Return to our main page to start fresh'
    },
    {
        name: 'Doc',
        href: '/doc',
        desc: 'Learn more about our features and capabilities',
        icon: <File className='size-5' />,
        titleInNotFound: 'Read our documentation',
        descInNotFound: 'Learn more about our features and capabilities'
    },
    {
        name: 'Blog',
        href: '/blog',
        desc: 'Check out our latest articles and updates',
        icon: <Newspaper className='size-5' />,
        titleInNotFound: 'Explore our blog',
        descInNotFound: 'Check out our latest articles and updates'
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
