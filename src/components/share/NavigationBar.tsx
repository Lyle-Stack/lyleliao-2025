import LLLogo from '@/components/icon/LLLogo';
import SectionPadding from '@/components/share/SectionPadding';
import ThemeSwitch from '@/components/share/ThemeSwitch';
import { Button } from '@/components/ui/button';

import { Menu } from 'lucide-react';

const NavigationBar = () => {
    return (
        <nav className='sticky right-0 top-0 isolate z-50 border-b border-border/50 bg-background/10 py-3.5 backdrop-blur md:py-4'>
            <SectionPadding>
                <div>
                    <div className='flex w-full items-center justify-between gap-6 px-6'>
                        <LLLogo />
                        <div className='flex flex-row flex-nowrap items-center gap-2'>
                            <ThemeSwitch />
                            {/* TODO: ! move to lower level, not `use client` here */}
                            <Button variant='ghost' size='icon' className='[&_svg]:size-8'>
                                <Menu size={40} />
                                <span className='sr-only'>Toggle Sidebar</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionPadding>
        </nav>
    );
};

export default NavigationBar;
