import React from 'react';

import Dribbble from '../icon/Dribbble';
import Facebook from '../icon/Facebook';
import Github from '../icon/Github';
import Instagram from '../icon/Instagram';
import SectionPadding from '../share/SectionPadding';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <SectionPadding>
            <section className='w-full bg-background py-16 md:py-24' aria-labelledby='contact-heading'>
                <div className='group-has-[]: container mx-auto flex flex-col items-center gap-8 px-6 md:flex-row md:items-start md:gap-16'>
                    <div className='flex flex-1 flex-col items-center justify-center'>
                        <div className='flex flex-col items-center gap-8 text-center md:items-start md:text-left'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm font-semibold text-muted-foreground md:text-base'>Contact us</p>
                                <h1 id='contact-heading' className='text-3xl font-bold text-foreground md:text-4xl'>
                                    Get in touch
                                </h1>
                                <p className='text-base text-muted-foreground'>
                                    Write a welcoming sentence that encourage contact. Include your response time
                                    commitment and highlight your team's readiness to help.
                                </p>
                            </div>
                            <div className='flex flex-row gap-5'>
                                <a href='#' className='text-foreground transition-all duration-300 hover:scale-110'>
                                    <Facebook />
                                </a>
                                <a href='#' className='text-foreground transition-all duration-300 hover:scale-110'>
                                    <Instagram />
                                </a>
                                <a href='#' className='text-foreground transition-all duration-300 hover:scale-110'>
                                    <Github />
                                </a>
                                <a href='#' className='text-foreground transition-all duration-300 hover:scale-110'>
                                    <Dribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        data-orientation='horizontal'
                        role='none'
                        className='block h-px w-full shrink-0 bg-border md:hidden'></div>
                    <div className='ahfi9lnyrg flex flex-1 flex-col items-center rounded-xl md:items-start md:p-12'>
                        <div className='flex flex-1 flex-col gap-12'>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='flex size-10 items-center justify-center rounded-md border bg-background shadow-sm'>
                                    <Phone className='size-5 text-primary' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-base font-semibold leading-6 text-card-foreground'>Call us</h3>
                                    <span className='text-base text-muted-foreground underline'>+1 400 500 600</span>
                                </div>
                            </a>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='flex size-10 items-center justify-center rounded-md border bg-background shadow-sm'>
                                    <Mail className='size-5 text-primary' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-base font-semibold leading-6 text-card-foreground'>
                                        Write an email
                                    </h3>
                                    <span className='text-base text-muted-foreground underline'>hello@example.com</span>
                                </div>
                            </a>
                            <a
                                href='#'
                                className='flex cursor-pointer flex-col items-center gap-5 md:flex-row md:items-start'>
                                <div className='flex size-10 items-center justify-center rounded-md border bg-background shadow-sm'>
                                    <MapPin className='size-5 text-primary' />
                                </div>
                                <div className='flex flex-col gap-1 text-center md:text-left'>
                                    <h3 className='text-base font-semibold leading-6 text-card-foreground'>
                                        Visit our office
                                    </h3>
                                    <span className='text-base text-muted-foreground underline'>
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
