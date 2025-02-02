import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

type CardBaseProps = {
    time: string;
    cat: string;
    href?: string;
    title: string;
    desc: string;
    imgSrc: string;
    author: string;
    role: string;
};
const CardBase = ({ time, cat, href, title, desc, imgSrc, author, role }: CardBaseProps) => {
    return (
        <>
            <CardHeader>
                <p>
                    {time} · {cat}
                </p>
                <CardTitle className={cn(href && 'group-hover/card:underline')}>{title}</CardTitle>
            </CardHeader>
            <CardDescription className='line-clamp-3 flex-1'>{desc}</CardDescription>
            <CardFooter className='justify-start gap-4 pt-2'>
                <span className='size-10 shrink-0 grow-0 overflow-hidden rounded-full'>
                    <img className='size-full object-cover' alt={author} src={imgSrc} />
                </span>
                <div className='text-sm'>
                    <p className='text-foreground font-medium'>{author}</p>
                    <p className='text-muted-foreground'>{role}</p>
                </div>
            </CardFooter>
        </>
    );
};

type CustomizedCardProps = {
    className?: string;
} & CardBaseProps;

export const PureCard = ({ className, ...props }: CustomizedCardProps) => {
    return (
        <Card className={cn('border-0 lg:border-0', className)}>
            <CardBase {...props} />
        </Card>
    );
};

export const CardWithInnerLink = ({ className, ...props }: CustomizedCardProps) => {
    return (
        <Card className={className}>
            <Link
                href={props.href ?? '#'}
                className={cn(
                    'group/card flex cursor-pointer flex-col justify-start gap-2',
                    !props.href && 'cursor-default'
                )}>
                <CardBase {...props} />
            </Link>
        </Card>
    );
};

export const CardWithOutterLink = ({ className, ...props }: CustomizedCardProps) => {
    return (
        <Link href={props.href ?? '#'} className={cn('group/card', className)}>
            <Card>
                <CardBase {...props} />
            </Card>
        </Link>
    );
};
