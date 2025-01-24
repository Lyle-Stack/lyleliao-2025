'use client';

import { JSX } from 'react';

import { useTheme } from 'next-themes';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
        name: '系統',
        value: 'system',
        iconSvg: (<MonitorCog className='size-4' />),
    },
    {
        name: '淺色',
        value: 'light',
        iconSvg: (<Sun className='size-4' />),
    },
    {
        name: '深色',
        value: 'dark',
        iconSvg: (<Moon className='size-4' />),
    },
];

const ThemeSwitch: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        // <div className='flex max-w-fit flex-row justify-center overflow-hidden rounded-lg border border-border'>
        <Select onValueChange={setTheme} defaultValue='system' value={theme}>
            <SelectTrigger className='w-[72px] sm:w-32' tabIndex={-1}>
                <SelectValue placeholder='顏色主題' />
            </SelectTrigger>
            <SelectContent className='min-w-[72px] sm:min-w-32'>
                {SWITCH_DATA.map((data) => (
                    <SelectItem
                        key={`theme-select-${data.value}`}
                        value={data.value}
                        tabIndex={-1}
                        className='py-2 pl-4'>
                        <div className='flex flex-nowrap items-center gap-2'>
                            {data.iconSvg}
                            <h3 className='hidden sm:block'>{data.name}</h3>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default ThemeSwitch;
