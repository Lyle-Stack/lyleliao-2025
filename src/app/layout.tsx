import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import '@/app/fonts.css';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { BASE_URL } from './sitemap';

export const NAME = 'Lyle 仲逸';
const TITLE = 'Lyle | AI Automation & Website Builder';
const DESCRIPTION =
    '人人都該有的 AI 自動化時代, Lyle 網頁全端開發 x AI 驅動,創建你的數位未來,運用科技解鎖無限未來,幫助您實現夢想。';

export const metadata: Metadata = {
    title: {
        template: `%s | ${NAME}`,
        default: TITLE
        // absolute: 'WHATEVER' // can use `absolute` in any page to override title template.
    },
    description: DESCRIPTION,
    authors: {
        name: NAME,
        url: '#'
    },
    keywords: [NAME, 'AI Automation', 'AI 自動化', 'Wesite Builder', '網頁開發'],
    referrer: 'origin-when-cross-origin',
    creator: NAME,
    publisher: NAME,
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: BASE_URL,
        types: {
            'application/rss+xml': new URL('/rss', BASE_URL)
        }
    },
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: BASE_URL,
        title: TITLE,
        description: DESCRIPTION,
        siteName: TITLE
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION
        // site: BASE_URL, // I do not have account
        // creator: '@lyleliao' // I do not have account
    },
    formatDetection: { telephone: false, address: false, email: false }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='zh-TW' className='scroll-smooth'>
            <body className='antialiased'>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
};

export default Layout;
