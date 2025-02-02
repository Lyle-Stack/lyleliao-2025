import { livePosts } from '@/app/(root)/blog/utils';

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
                            {livePosts.slice(0, 3).map((post, index) => (
                                <CardWithInnerLink
                                    key={`rest-blog-list-${index}-${post.slug}`}
                                    time={post.metadata.formattedPublishedAt}
                                    cat={post.metadata.genre}
                                    href={post.href}
                                    title={post.metadata.title}
                                    desc={post.metadata.summary}
                                    imgSrc='https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyle-avatar.jpg'
                                    author='Lyle 仲逸'
                                    role='AI Automation x Website Builder'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionPadding>
    );
};

export default BlogSection;
