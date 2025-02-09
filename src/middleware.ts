import { type NextRequest, NextResponse } from 'next/server';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Using CORS in Next.js to handle cross-origin requests see:
 * ? https://blog.logrocket.com/using-cors-next-js-handle-cross-origin-requests/
 * ? https://nextjs.org/docs/app/building-your-application/routing/middleware#cors
 */
const allowedOrigins = [
    isProduction ? 'https://lyleliao.com' : 'localhost:3000',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com'
];

const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
    'Access-Control-Allow-Credentials': 'true'
};

/**
 * settings strict-csp see:
 * ? https://github.com/vercel/next.js/blob/canary/examples/with-strict-csp/middleware.js
 */
export function middleware(request: NextRequest) {
    // Check the origin from the request
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted requests
    if (request.method === 'OPTIONS') {
        const preflightHeaders = {
            ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions
        };

        return NextResponse.json({}, { headers: preflightHeaders });
    }

    // const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    /**
     * 'strict-dynamic' only works in conjunction with 'hash-value' or 'nonce-value',
     * and if they are absent, all scripts on the page will be disabled,
     * because 'strict-dynamic' overrides the 'unsafe-inline' action
     * ! 'strict-dynamic' is deleted
     * and disables whitelisting of host-based sources, including the 'self' token
     * ? https://csplite.com/csp104/
     * ? https://stackoverflow.com/questions/59848978/strict-dynamic-is-present-so-host-based-whitelisting-is-disabled
     *
     * ? https://chris.lu/web_development/posts/csp
     *
     * - script-src NextJS requires 'unsafe-eval' in dev (faster source maps)
     * - style-src NextJS requires 'unsafe-inline'
     * */
    const cspHeader = `
    default-src 'self';
    script-src 'self' https: http: ${allowedOrigins.join(' ')} ${isProduction ? `'unsafe-inline'` : `'unsafe-inline' 'unsafe-eval'`};
    style-src 'self' ${allowedOrigins.join(' ')} 'unsafe-inline';
    img-src 'self' blob: data: https://s3.ap-southeast-2.amazonaws.com ${allowedOrigins.join(' ')};
    font-src 'self' ${allowedOrigins.join(' ')};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    // requestHeaders.set('x-nonce', 'NmYxNTcyMDYtMTE1Ni00MjA1LTllM2ItMGU4MjUzYmEyMDhk');
    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

/**
 * settings full strict-csp escape see:
 * ? https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - customized OG images and RSS routes
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|og|feed|_vercel).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' }
            ]
        },

        {
            source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|og|feed|_vercel).*)',
            has: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' }
            ]
        },

        {
            source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|og|feed|_vercel).*)',
            has: [{ type: 'header', key: 'x-present' }],
            missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }]
        }
    ]
};
