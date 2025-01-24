import LLLogo from '../icon/LLLogo';
import { Separator } from '../ui/separator';
import SectionPadding from './SectionPadding';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <SectionPadding>
            <footer className='bg-background w-full py-16 lg:py-24' role='contentinfo' aria-label='Site footer'>
                <div className='mx-auto flex flex-col gap-12 px-3 lg:gap-16'>
                    <div className='relative flex flex-col items-center gap-12 md:items-center md:justify-between lg:flex-row lg:gap-8'>
                        <a href='/'>
                            <LLLogo />
                        </a>
                        <nav
                            className='[&>*]:text-muted-foreground hover:[&>*]:text-foreground flex flex-col items-center gap-6 md:gap-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-row [&>*]:transition-colors'
                            aria-label='Footer navigation'>
                            <a href='/'>Home</a>
                            <a href='/blog'>Blog</a>
                        </nav>
                        <SocialLinks />
                    </div>
                    <Separator />
                    <div className='flex flex-col items-center justify-between gap-12 text-center md:gap-6 lg:flex-row lg:text-left'>
                        <p className='text-muted-foreground order-2 md:order-1'>
                            <span>Copyright © 2025</span>{' '}
                            <a href='/' className='hover:underline'>
                                lyleliao.com
                            </a>
                            . All rights reserved.
                        </p>
                        <p className='text-muted-foreground order-1 md:order-2'>Built by 廖仲逸 Lyle Liao</p>
                        {/* <nav
                            className='order-1 flex flex-col items-center gap-6 text-center md:order-2 md:flex-row md:gap-7 [&>*]:text-muted-foreground [&>*]:transition-colors hover:[&>*]:text-foreground'
                            aria-label='Legal links'>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms of Service</a>
                            <a href='#'>Cookies Settings</a>
                        </nav> */}
                    </div>
                </div>
            </footer>
        </SectionPadding>
    );
};

export default Footer;
