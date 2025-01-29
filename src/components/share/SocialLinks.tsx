import { cn } from '@/lib/utils';

import Github from '../icon/Github';
import Instagram from '../icon/Instagram';
import Linkedin from '../icon/Linkedin';
import { ClassNameValue } from 'tailwind-merge';

const SocialLinks = ({ className }: { className?: ClassNameValue }) => {
    return (
        <div
            className={cn(
                'flex justify-center gap-4 md:gap-6 [&>*]:transition-transform [&>*]:duration-300 [&>*]:hover:scale-125',
                className
            )}
            aria-label='Social media links'>
            <a href='https://www.instagram.com/liaochungyid/' target='_blank' rel='noreferrer'>
                <Instagram />
            </a>
            <a href='https://www.linkedin.com/in/lyleliao/' target='_blank' rel='noreferrer'>
                <Linkedin />
            </a>
            <a href='https://github.com/lyle-Stack/' target='_blank' rel='noreferrer'>
                <Github />
            </a>
        </div>
    );
};

export default SocialLinks;
