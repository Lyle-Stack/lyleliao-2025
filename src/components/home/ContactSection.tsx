import React from 'react';

import SectionPadding from '../share/SectionPadding';
import SocialLinks from '../share/SocialLinks';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <SectionPadding>
            <section className='bg-background w-full py-16 md:py-24' aria-labelledby='contact-heading'>
                <div className='mx-auto flex flex-col items-center gap-8 px-3 md:flex-row md:items-start md:gap-16'>
                    <div className='flex flex-1 flex-col items-center justify-center'>
                        <div className='flex flex-col items-center gap-8 text-center md:items-start md:text-left'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-muted-foreground text-sm font-semibold md:text-base'>Contact us</p>
                                <h1 id='contact-heading' className='text-foreground text-3xl font-bold md:text-4xl'>
                                    Get in touch
                                </h1>
                                <p className='text-muted-foreground text-base'>
                                    Write a welcoming sentence that encourage contact. Include your response time
                                    commitment and highlight your team's readiness to help.
                                </p>
                            </div>
                            <SocialLinks className='gap-5 md:gap-5' />
                        </div>
                    </div>
                    <div
                        data-orientation='horizontal'
                        role='none'
                        className='bg-border block h-px w-full shrink-0 md:hidden'></div>
                    <div className='ahfi9lnyrg flex flex-1 flex-col items-center rounded-xl md:items-start md:p-12'>
                        <div className='flex flex-1 flex-col gap-12'>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='bg-background flex size-10 items-center justify-center rounded-md border shadow-xs'>
                                    <Phone className='text-primary size-5' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-card-foreground text-base leading-6 font-semibold'>Call us</h3>
                                    <span className='text-muted-foreground text-base underline'>+1 400 500 600</span>
                                </div>
                            </a>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='bg-background flex size-10 items-center justify-center rounded-md border shadow-xs'>
                                    <Mail className='text-primary size-5' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-card-foreground text-base leading-6 font-semibold'>
                                        Write an email
                                    </h3>
                                    <span className='text-muted-foreground text-base underline'>hello@example.com</span>
                                </div>
                            </a>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='bg-background flex size-10 items-center justify-center rounded-md border shadow-xs'>
                                    <MapPin className='text-primary size-5' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-card-foreground text-base leading-6 font-semibold'>
                                        Visit our office
                                    </h3>
                                    <span className='text-muted-foreground text-base underline'>
                                        192 Griffin Street, Gilbert, AZ 32521
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default ContactSection;
