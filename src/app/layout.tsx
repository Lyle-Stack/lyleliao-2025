import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import '@/app/fonts.css';
import '@/app/globals.css';

const NAME = 'Lyle 仲逸';
const TITLE = 'Lyle | AI Automation & Website Builder';
const URL = 'https://lyleliao.com';
const DESCRIPTION =
    '人人都該有的 AI 自動化時代, Lyle 網頁全端開發 x AI 驅動,創建你的數位未來,運用科技姐所無限未來,幫助您實現夢想。';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors: {
        name: NAME,
        url: '#'
    },
    keywords: [NAME, 'AI Automation', 'AI 自動化', 'Wesite Builder', '網頁開發'],
    referrer: 'origin',
    creator: NAME,
    publisher: NAME,
    robots: 'index, follow',
    alternates: { canonical: URL },
    openGraph: {
        type: 'website',
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        siteName: TITLE
    },
    twitter: {
        card: 'summary_large_image',
        site: '@site',
        creator: '@creator'
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
            </body>
        </html>
    );
};

export default Layout;
