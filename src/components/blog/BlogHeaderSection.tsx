const BlogHeaderSection = () => {
    return (
        <div className='flex max-w-xl flex-col items-start gap-4 text-left md:gap-5'>
            <p className='text-base font-semibold text-muted-foreground md:text-sm'>Blog</p>
            <h2 id='blog-section-2-heading' className='text-3xl font-bold leading-tight md:text-4xl'>
                精采好文 開拓視野
            </h2>
            <p className='text-base text-muted-foreground'>
                為你的工作、生活、學習提供有用的資訊與技巧，讓你的生活更加美好
            </p>
        </div>
    );
};

export default BlogHeaderSection;
