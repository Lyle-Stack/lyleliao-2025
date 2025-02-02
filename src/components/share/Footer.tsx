import LLLogo from '../icon/LLLogo';
import { Separator } from '../ui/separator';
import SectionPadding from './SectionPadding';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <SectionPadding>
            <footer className='bg-background w-full py-16 lg:py-24' role='contentinfo' aria-label='Site footer'>
                <div className='mx-auto flex flex-col gap-12 px-3 md:gap-16'>
                    <div className='relative flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-8'>
                        <a href='/' aria-label='Home Page'>
                            <LLLogo />
                        </a>
                        <nav
                            className='[&>*]:text-muted-foreground hover:[&>*]:text-foreground flex flex-col items-center gap-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:flex-row md:gap-8 [&>*]:transition-colors'
                            aria-label='Footer navigation'>
                            <a href='/' aria-label='Home Page'>
                                Home
                            </a>
                            <a href='/blog' aria-label='Blog Page'>
                                Blog
                            </a>
                        </nav>
                        <SocialLinks />
                    </div>
                    <Separator />
                    <div className='flex flex-col items-center justify-between gap-12 text-center md:flex-row md:gap-6 md:text-left'>
                        <p className='text-muted-foreground order-2 md:order-1'>
                            <span>Copyright © {new Date().getFullYear()}</span> lyleliao.com. All rights reserved.
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
