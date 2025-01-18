const BlogArticleAside = () => {
    return (
        <aside className='sticky top-24 hidden flex-col gap-5 self-start text-sm lg:flex lg:max-w-48'>
            <span className='font-medium text-foreground'>On this page</span>
            <nav className='flex flex-col gap-3 text-muted-foreground hover:[&>a]:text-foreground'>
                <a href='#article-subtitle-1'>不缺向外改變的方式，而需要一個，向內看的科學方法</a>
                <a href='#article-subtitle-2'>直觀的人生時間表</a>
                <a href='#article-subtitle-3'>時間擠不出來？要善用時間的轉換</a>
                <a href='#article-title'>Back to Top ↑</a>
            </nav>
        </aside>
    );
};

export default BlogArticleAside;
