// TODO: add nav breadcrumb (tag, category, etc.)

const BlogPostHeaderSection = () => {
    return (
        <div className='flex flex-col gap-8 pb-16 pt-8 lg:flex-row lg:pt-16'>
            <div className='flex flex-1 flex-col justify-between gap-6'>
                <div className='flex flex-col gap-4 md:gap-5'>
                    <p className='text-sm text-muted-foreground'>Aug 17, 2024 · Point of View</p>
                    <h1 id='article-title' className='text-4xl font-bold text-foreground lg:text-5xl'>
                        Strategize Your Life，策畫你的人生，一篇 HBR （哈佛商業評論）文章
                    </h1>
                    <p className='text-lg text-muted-foreground'>
                        花費許多時間，很難找到有滿意的。更多是推銷書籍與課程的內容。我對這些廣告並不反感，因為真的需要一探究竟。令人困惑的是，他的餅畫得太美，簡直是「買必勝」的承諾。仔細看看，也確實他們可以做麼說，因為他們給了一堆指引，一堆要改變，一堆要立即執行的事情。
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='size-10 shrink-0 grow-0 overflow-hidden rounded-full'>
                        <img className='size-full object-cover' alt='Lyle' src='/images/lyle-avatar.jpg' />
                    </span>
                    <div className='text-sm'>
                        <p className='font-medium text-foreground'>Lyle 仲逸</p>
                        <p className='text-muted-foreground'>AI Automation x Website Builder</p>
                    </div>
                </div>
            </div>
            <div className='h-full flex-1'>
                <div data-radix-aspect-ratio-wrapper='' className='relative w-full pb-[62.5%]'>
                    <div className='absolute inset-0'>
                        <img src='/images/strategize-life.png' className='size-full rounded-md object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostHeaderSection;
