import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const SectionPadding = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <Slot className={cn('w-full px-[max((50%_-_37.5rem),_0px)]', className)} {...props} />;
};

export default SectionPadding;
