import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import '@/app/fonts.css';
import '@/app/globals.css';
import NavigationBar from '@/components/share/NavigationBar';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
    title: '廖仲逸 Lyle Liao',
    description:
        '幫助在人生中迷路的大家，認識自我價值，認識AI（成為合格咒術師），有步驟的前進。成為身處領域的關鍵影響人，並提高個人價值。達到真正的「做自己」。',
    authors: {
        name: '廖仲逸 Lyle Liao',
        url: '#'
    },
    keywords: ['廖仲逸', 'Lyle Liao', '生產力', '創造力'],
    referrer: 'origin',
    creator: '廖仲逸 Lyle Liao',
    publisher: '廖仲逸 Lyle Liao',
    robots: 'index, follow',
    alternates: { canonical: 'https://lyleliao.com' },
    openGraph: {
        type: 'website',
        url: 'https://lyleliao.com',
        title: '廖仲逸 Lyle Liao',
        description:
            '幫助在人生中迷路的大家，認識自我價值，認識AI（成為合格咒術師），有步驟的前進。成為身處領域的關鍵影響人，並提高個人價值。達到真正的「做自己」。',
        siteName: '廖仲逸 Lyle Liao'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@site',
        creator: '@creator'
    },
    formatDetection: { telephone: false }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='zh-TW' className='scroll-smooth'>
            <body className='antialiased'>
                <ThemeProvider attribute='class'>
                    <NavigationBar />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
