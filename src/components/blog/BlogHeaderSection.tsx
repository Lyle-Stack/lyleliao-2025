const BlogHeaderSection = () => {
    return (
        <div className='flex w-[min(calc(65ch+3rem),100%)] flex-col items-start gap-4 px-6 text-left sm:mx-auto sm:items-center md:gap-5 lg:mx-0 lg:items-start'>
            <p className='text-muted-foreground text-base font-semibold md:text-sm'>Blog</p>
            <h2 id='blog-section-2-heading' className='text-3xl leading-tight font-bold md:text-4xl'>
                精采好文 開拓視野
            </h2>
            <p className='text-muted-foreground text-base'>
                為你的工作、生活、學習提供有用的資訊與技巧，讓你的生活更加美好
            </p>
        </div>
    );
};

export default BlogHeaderSection;
