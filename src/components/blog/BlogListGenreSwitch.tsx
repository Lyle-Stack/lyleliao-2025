'use client';

import { useRouter } from 'next/navigation';

import { allGenreSlug, genreReverseMap } from '@/app/(root)/blog/utils-genre';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type SelectValue = (typeof allGenreSlug)[number] | 'all';

type Props = {
    defaultValue?: SelectValue;
};

const BlogListGenreSwitch = ({ defaultValue = 'all' }: Props) => {
    const router = useRouter();

    const handleGenreChange = (genre: SelectValue) => {
        if (genre === 'all') {
            return router.push('/blog');
        }
        router.push(`/blog/${genre}`);
    };

    return (
        <Select defaultValue='system' value={defaultValue} onValueChange={handleGenreChange}>
            <SelectTrigger className='min-w-48'>
                <SelectValue placeholder='文章類別' />
            </SelectTrigger>
            <SelectContent className='min-w-48'>
                <SelectItem key='blog-list-genre-select-all' value='all' className='py-2 pl-4'>
                    <div className='flex flex-nowrap items-center gap-2'>
                        <h3>全部文章</h3>
                    </div>
                </SelectItem>
                {allGenreSlug.map((genre) => (
                    <SelectItem key={`blog-list-genre-select-${genre}`} value={genre} className='py-2 pl-4'>
                        <div className='flex flex-nowrap items-center gap-2'>
                            <h3>{genreReverseMap[genre]}</h3>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default BlogListGenreSwitch;
