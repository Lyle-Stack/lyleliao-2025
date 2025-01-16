'use client';

import { JSX, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

import { MonitorCog, Moon, Sun } from 'lucide-react';

// Define the type for each switch option
interface SwitchOption {
    name: string;
    value: string;
    iconSvg: JSX.Element;
}

// Define the data with type annotations
// prettier-ignore
const SWITCH_DATA: SwitchOption[] = [
    {
        name: 'System',
        value: 'system',
        iconSvg: (<MonitorCog className='size-4' />),
    },
    {
        name: 'Light',
        value: 'light',
        iconSvg: (<Sun className='size-4' />),
    },
    {
        name: 'Dark',
        value: 'dark',
        iconSvg: (<Moon className='size-4' />),
    },
];

const ThemeSwitch: React.FC = () => {
    const { theme, setTheme } = useTheme();

    // State to manage the component mount status
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <div className='flex max-w-fit flex-row justify-center overflow-hidden rounded-lg border border-border'>
            {SWITCH_DATA.map((data) => (
                <Button
                    aria-selected={theme === data.value && mounted}
                    variant='ghost'
                    key={data.value}
                    className='flex h-[38px] items-center gap-2 rounded-none border-border/50 bg-background/50 px-3.5 py-1.5 text-foreground first:rounded-l-sm last:rounded-r-sm aria-selected:bg-border/50'
                    onClick={() => {
                        console.log('Theme:', data.value);
                        setTheme(data.value);
                    }}>
                    {data.iconSvg}
                    <h3 className='hidden sm:block'>{data.name}</h3>
                </Button>
            ))}
        </div>
    );
};

export default ThemeSwitch;
