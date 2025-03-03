import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import '@/app/fonts.css';
import '@/app/globals.css';
import JsonldScript from '@/components/share/JsonldScript';
import { DESCRIPTION, JOB_TITLE, NAME } from '@/constant/jsonld-and-meta';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { BASE_URL } from './sitemap';

const TITLE = `${NAME} | ${JOB_TITLE}`;

export const metadata: Metadata = {
    metadataBase: BASE_URL,
    title: {
        template: `%s | ${NAME}`,
        default: TITLE
        // absolute: 'WHATEVER' // can use `absolute` in any page to override title template.
    },
    description: DESCRIPTION,
    authors: {
        name: NAME,
        url: BASE_URL
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
            nosnippet: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: BASE_URL,
        types: {
            'application/rss+xml': '/feed'
        },
        languages: {
            'zh-TW': '/'
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

const jsonLdPerson = {
    '@context': 'http://www.schema.org',
    '@type': 'person',
    name: NAME,
    jobTitle: JOB_TITLE,
    height: '67 inches',
    gender: 'male',
    url: BASE_URL.toString(),
    sameAs: [
        'https://www.instagram.com/liaochungyid/',
        'https://www.linkedin.com/in/lyleliao/',
        'https://github.com/lyle-Stack/'
    ],
    image: 'https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Taichung City',
        addressRegion: 'Nantun District',
        postalCode: '408',
        addressCountry: 'Taiwan'
    },
    email: 'lyle@lyleliao.com',
    birthDate: '1990-11-11',
    birthPlace: 'Taichung City, Taiwan',
    nationality: 'Taiwanese'
};
// Address	No. 17-32, Zhongyong Rd, Nantun District, Taichung City, Taiwan 408
// Latitude	24.1316156
// Longitude	120.6098393

const jsonldWebsite = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: TITLE,
    url: BASE_URL.toString(),
    sameAs: [
        'https://www.instagram.com/liaochungyid/',
        'https://www.linkedin.com/in/lyleliao/',
        'https://github.com/lyle-Stack/'
    ]
    // potentialAction: {
    //     '@type': 'SearchAction',
    //     target: 'http://example.com/pages/search_results?q={search_term}',
    //     'query-input': 'required name=search_term'
    // }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='zh-TW' className='scroll-smooth'>
            <body className='antialiased'>
                <ThemeProvider
                    // nonce='NmYxNTcyMDYtMTE1Ni00MjA1LTllM2ItMGU4MjUzYmEyMDhk'
                    disableTransitionOnChange
                    enableSystem
                    attribute='class'>
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
                <JsonldScript jsonld={jsonLdPerson} />
                <JsonldScript jsonld={jsonldWebsite} />
            </body>
        </html>
    );
};

export default Layout;
