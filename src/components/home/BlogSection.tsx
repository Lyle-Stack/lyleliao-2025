import BlockHeaderSection from '../share/BlockHeaderSection';
import { CardWithInnerLink } from '../share/CustomizedCard';
import SectionPadding from '../share/SectionPadding';

const BlogSection = () => {
    return (
        <SectionPadding>
            <section className='py-16 md:py-24' aria-labelledby='blog-section-2-heading'>
                <div className='mx-auto px-3'>
                    <div className='flex flex-col items-start gap-12'>
                        <BlockHeaderSection />
                        <div className='grid grid-cols-1 lg:grid-cols-3' role='list'>
                            {[
                                {
                                    time: 'Aug 17, 2024',
                                    cat: 'Point of View',
                                    title: 'Strategize Your Life，策畫你的人生，一篇 HBR (哈佛商業評論)文章',
                                    author: 'Lyle 仲逸',
                                    imgSrc: 'https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg',
                                    href: '/blog/strategize-my-life',
                                    role: 'AI Automation x Website Builder',
                                    desc: '花費許多時間，很難找到有滿意的。更多是推銷書籍與課程的內容。我對這些廣告並不反感，因為真的需要一探究竟。令人困惑的是，他的餅畫得太美，簡直是「買必勝」的承諾。仔細看看，也確實他們可以做麼說，因為他們給了一堆指引，一堆要改變，一堆要立即執行的事情。'
                                },
                                {
                                    time: 'Near future',
                                    cat: 'Any Category',
                                    title: '敬請期待',
                                    author: ' ',
                                    href: '',
                                    imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/RrPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWLPOy4ZNPwR4AAAAASUVORK5CYII=',
                                    role: ' ',
                                    desc: 'Comming soon'
                                },
                                {
                                    time: 'Near future',
                                    cat: 'Any Category',
                                    title: '敬請期待',
                                    author: ' ',
                                    href: '',
                                    imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/RrPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWLPOy4ZNPwR4AAAAASUVORK5CYII=',
                                    role: ' ',
                                    desc: 'Comming soon'
                                }
                            ].map((item, index) => (
                                <CardWithInnerLink key={`blog-list-${index}`} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogSection;
