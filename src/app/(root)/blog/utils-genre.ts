// This file is for client side (server also works), don't put any server side code (e.g. fs)

export const genreMap = {
    個人觀點: 'pov',
    'AI 自動化 & Agent': 'aiaa'
} as const;

export const genreReverseMap = {
    pov: '個人觀點',
    aiaa: 'AI 自動化 & Agent'
} as const;

export const allGenre = Object.keys(genreMap) as (keyof typeof genreMap)[];
export const allGenreSlug = Object.keys(genreReverseMap) as (keyof typeof genreReverseMap)[];
