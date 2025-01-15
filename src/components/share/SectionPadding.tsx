import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const SectionPadding = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <Slot className={cn('w-full px-[max((100%_-_75rem),_0)]', className)} {...props} />;
};

export default SectionPadding;
