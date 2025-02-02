// import Banner from '@/components/home/Banner';
import BlogSection from '@/components/home/BlogSection';
// import ContactSection from '@/components/home/ContactSection';
import CtaSection from '@/components/home/CtaSection';
// import FaqSection from '@/components/home/FaqSection';
import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';

import { DESCRIPTION, JOB_TITLE, NAME } from '../layout';
import { BASE_URL } from '../sitemap';

// import PricingSection from '@/components/home/PricingSection';
// import TestimonialSection from '@/components/home/TestimonialSection';
// import RichTextSection from '@/components/share/RichTextSection';

export const JSON_LD_MYSELF = {
    '@type': 'Person',
    name: NAME,
    jobTitle: JOB_TITLE,
    url: BASE_URL.toString()
};

const jsonlfWebpage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: NAME,
    description: DESCRIPTION,
    author: JSON_LD_MYSELF,
    publisher: JSON_LD_MYSELF
};

const HomePage = () => {
    return (
        <>
            {/* <Banner /> */}
            <HeroSection />
            <FeatureSection />
            <CtaSection />
            <BlogSection />
            {/* <TestimonialSection /> */}
            {/* <PricingSection /> */}
            {/* <FaqSection /> */}
            {/* <ContactSection /> */}
            {/* <RichTextSection /> */}
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonlfWebpage) }} />
        </>
    );
};

export default HomePage;
