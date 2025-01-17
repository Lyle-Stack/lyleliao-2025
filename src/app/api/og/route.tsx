import { ImageResponse } from 'next/og';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DEFAULT_TAG = '#AI-Automation #Website-Builder #AI-Agent #AAA';
const DEFAULT_TITLE = 'Lyle, AI 自動化 & 網頁開發者';
const DEFAULT_DESC =
    '人人都該有的 AI 自動化時代， Lyle 網頁全端開發 x AI 驅動，創建你的數位未來，運用科技姐所無限未來，幫助您實現夢想。';

/**
 * Handles the GET request to generate an Open Graph (OG) image.
 *
 * This function retrieves query parameters from the request URL to customize the OG image.
 * It supports parameters for image inclusion, tag, title, and description.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<ImageResponse | Response>} - The generated image or an error response.
 * @see https://www.jamesshopland.com/blog/dynamic-og-images-nextjs/
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
 * @see https://nextjs.org/docs/app/api-reference/functions/image-response
 * @see https://github.com/vercel/satori#css
 */
export async function GET(request: Request): Promise<ImageResponse | Response> {
    try {
        const { searchParams } = new URL(request.url);

        // Determine if no image should be included
        const isNoImage = searchParams.get('ni') === 't';

        // Retrieve and process tag parameter
        const isTagReplace = searchParams.get('tr') === 't';
        const isTag = searchParams.get('tag');
        const tag =
            isTag === ''
                ? ''
                : isTag
                  ? isTagReplace
                      ? '#' +
                        decodeURIComponent(isTag)
                            .split(',')
                            .map((tag) => tag.replaceAll(' ', ''))
                            .join(' #')
                            .slice(0, 150)
                      : isTag
                  : DEFAULT_TAG;

        // Retrieve and process title parameter
        const isTitle = searchParams.get('title');
        const title = isTitle === '' ? '' : isTitle ? decodeURIComponent(isTitle).slice(0, 60) : DEFAULT_TITLE;

        // Retrieve and process description parameter
        const isDesc = searchParams.get('desc');
        const desc = isDesc === '' ? '' : isDesc ? decodeURIComponent(isDesc).slice(0, 300) : DEFAULT_DESC;

        // Load the logo image data
        const logoData = await readFile(join(process.cwd(), '/assets/lyle-look-left.png'));
        const logoSrc = Uint8Array.from(logoData).buffer;

        // Return the generated image response
        return new ImageResponse(
            (
                <div
                    style={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage:
                            'linear-gradient(to right top, #f2d4b4, #e1dcb9, #d0e3c5, #c5e7d6, #c3e9e6, #c4e9ee, #c8e8f4, #d0e6f8, #d4e3f9, #dae0f9, #e2dcf6, #e9d9f2)'
                    }}>
                    <div
                        tw='bg-white/30 flex flex-col border-2 w-full border-black/5 py-8 pl-32'
                        style={{
                            gap: '1rem',
                            backdropFilter: 'blur(8px)',
                            paddingRight: isNoImage ? 128 : 384,
                            alignItems: isNoImage ? 'center' : 'space-between',
                            textAlign: isNoImage ? 'center' : 'left'
                        }}>
                        {tag && <span tw='text-base tracking-wider font-normal text-gray-500'>{tag}</span>}
                        {title && <span tw='text-5xl tracking-tighter font-bold  text-gray-900'>{title}</span>}
                        {desc && <span tw='text-xl font-normal text-gray-500'>{desc}</span>}
                    </div>
                    {!isNoImage && (
                        <div tw='absolute inset-y-0 right-32 flex min-w-fit items-end justify-center'>
                            {/* @ts-ignore [Type 'ArrayBuffer' is not assignable to type 'string'.ts(2322)] but it works here */}
                            <img src={logoSrc} height='580' />
                        </div>
                    )}
                </div>
            ),
            {
                // Image dimensions
                width: 1200, // default is 1200
                height: 630 // default is 630
            }
        );
    } catch (e: any) {
        // Return an error response if image generation fails
        return new Response('Failed to generate OG image', { status: 500 });
    }
}
