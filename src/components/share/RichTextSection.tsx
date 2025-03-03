import React from 'react';

import SectionPadding from './SectionPadding';

const RichTextSection = () => {
    return (
        <SectionPadding>
            <section className='py-16 md:py-24'>
                <div className='blog mx-auto px-3'>
                    <article className='flex flex-col gap-12 md:gap-24' aria-labelledby='article-title'>
                        <div className='items-top tgdfdn15dl flex flex-col gap-8 lg:flex-row'>
                            <div className='flex flex-1 flex-col justify-between gap-6'>
                                <div className='flex flex-col gap-4 md:gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-muted-foreground text-sm leading-5'>Nov 11, 2024</p>
                                        <span className='text-muted-foreground text-sm leading-5'>·</span>
                                        <p className='text-muted-foreground text-sm leading-5'>Articles</p>
                                    </div>
                                    <h1 id='article-title' className='text-foreground text-4xl font-bold lg:text-5xl'>
                                        Short and clear engaging headline
                                    </h1>
                                    <p className='text-muted-foreground text-lg leading-7'>
                                        Add a concise value statement that captures reader interest and previews content
                                        value. Focus on benefits while keeping it under two lines. Align with your blog
                                        categories.
                                    </p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='relative flex size-10 shrink-0 overflow-hidden rounded-full'>
                                        <img
                                            className='aspect-square size-full'
                                            alt='Lando Norris'
                                            src='https://github.com/shadcn.png'
                                        />
                                    </span>
                                    <div className='flex flex-col'>
                                        <p className='text-foreground text-sm leading-5 font-medium'>Lando Norris</p>
                                        <p className='text-muted-foreground text-sm leading-5'>Product Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-full flex-1'>
                                <div data-radix-aspect-ratio-wrapper='' className='relative w-full pb-[62.5%]'>
                                    <div className='absolute inset-0'>
                                        <img
                                            src='https://ui.shadcn.com/placeholder.svg'
                                            className='y6dokfnd0t size-full rounded-xl'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-12'>
                            <div className='flex max-w-3xl flex-col gap-6'>
                                <p className='mt-0 leading-7'>
                                    Once upon a time, in a far-off land, there was a very lazy king who spent all day
                                    lounging on his throne. One day, his advisors came to him with a problem: the
                                    kingdom was t79cs9qwwk out of money.
                                </p>
                                <h2 id='the-kings-plan' className='scroll-mt-16 border-b pb-2 text-3xl font-semibold'>
                                    The King's Plan
                                </h2>
                                <p className='leading-7'>
                                    The king thought long and hard, and finally came up with a brilliant plan: he would
                                    tax the jokes in the kingdom.
                                </p>
                                <blockquote className='border-l-2 pl-6 italic'>
                                    "After all," he said, "everyone enjoys a good joke, so it's only fair that they
                                    should pay for the privilege."
                                </blockquote>
                                <h3 id='the-joke-tax' className='mt-8 scroll-mt-16 text-2xl font-semibold'>
                                    The Joke Tax
                                </h3>
                                <p className='leading-7'>
                                    The king's subjects were not amused. They grumbled and complained, but the king was
                                    firm:
                                </p>
                                <ul className='ml-6 list-disc space-y-2'>
                                    <li>1st level of puns: 5 gold coins</li>
                                    <li>2nd level of jokes: 10 gold coins</li>
                                    <li>3rd level of one-liners: 20 gold coins</li>
                                </ul>
                                <p className='leading-7'>
                                    As a result, people stopped telling jokes, and the kingdom fell into a gloom. But
                                    there was one person who refused to let the king's foolishness get him down: a court
                                    jester named Jokester.
                                </p>
                                <h3 id='jokesters-revolt' className='mt-8 scroll-mt-16 text-2xl font-semibold'>
                                    Jokester's Revolt
                                </h3>
                                <p className='leading-7'>
                                    Jokester began sneaking into the castle in the middle of the night and leaving jokes
                                    all over the place: under the king's pillow, in his soup, even in the royal toilet.
                                    The king was furious, but he couldn't seem to stop Jokester.
                                </p>
                                <p className='leading-7'>
                                    And then, one day, the people of the kingdom discovered that the jokes left by
                                    Jokester were so funny that they couldn't help but laugh. And once they started
                                    laughing, they couldn't stop.
                                </p>
                                <h3 id='the-peoples-rebellion' className='mt-8 scroll-mt-16 text-2xl font-semibold'>
                                    The People's Rebellion
                                </h3>
                                <p className='leading-7'>
                                    The people of the kingdom, feeling uplifted by the laughter, started to tell jokes
                                    and puns again, and soon the entire kingdom was in on the joke.
                                </p>
                                <p className='leading-7'>
                                    The king, seeing how much happier his subjects were, realized the error of his ways
                                    and repealed the joke tax. Jokester was declared a hero, and the kingdom lived
                                    happily ever after.
                                </p>
                                <p className='leading-7'>
                                    The moral of the story is: never underestimate the power of a good laugh and always
                                    be careful of bad ideas.
                                </p>
                            </div>
                            <aside className='hidden flex-col gap-5 lg:flex'>
                                <span className='text-foreground text-sm font-medium'>On this page</span>
                                <nav className='flex flex-col gap-3'>
                                    <a
                                        href='#the-kings-plan'
                                        className='text-muted-foreground hover:text-foreground text-sm'>
                                        The King's Plan
                                    </a>
                                    <a
                                        href='#the-joke-tax'
                                        className='text-muted-foreground hover:text-foreground text-sm'>
                                        The Joke Tax
                                    </a>
                                    <a
                                        href='#jokesters-revolt'
                                        className='text-muted-foreground hover:text-foreground text-sm'>
                                        Jokester's Revolt
                                    </a>
                                    <a
                                        href='#the-peoples-rebellion'
                                        className='text-muted-foreground hover:text-foreground text-sm'>
                                        The People's Rebellion
                                    </a>
                                </nav>
                            </aside>
                        </div>
                    </article>
                </div>
            </section>
        </SectionPadding>
    );
};

export default RichTextSection;
