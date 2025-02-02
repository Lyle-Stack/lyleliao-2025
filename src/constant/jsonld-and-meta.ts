import { BASE_URL } from '@/app/sitemap';

export const NAME = 'Lyle 仲逸';
export const JOB_TITLE = 'Full Stack Developer & AI consultant';
export const DESCRIPTION =
    '人人都該有的 AI 自動化時代, Lyle 網頁全端開發 x AI 驅動,創建你的數位未來,運用科技解鎖無限未來,幫助您實現夢想。';

export const BLOG_TITLE = 'Blog x AI x Life';

export const JSON_LD_MYSELF = {
    '@type': 'Person',
    name: NAME,
    jobTitle: JOB_TITLE,
    url: BASE_URL.toString()
};
