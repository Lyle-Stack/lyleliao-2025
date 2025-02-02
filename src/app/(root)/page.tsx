// import Banner from '@/components/home/Banner';
import BlogSection from '@/components/home/BlogSection';
// import ContactSection from '@/components/home/ContactSection';
import CtaSection from '@/components/home/CtaSection';
// import FaqSection from '@/components/home/FaqSection';
import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import JsonldScript from '@/components/share/JsonldScript';
import { DESCRIPTION, JSON_LD_MYSELF, NAME } from '@/constant/jsonld-and-meta';

// import PricingSection from '@/components/home/PricingSection';
// import TestimonialSection from '@/components/home/TestimonialSection';
// import RichTextSection from '@/components/share/RichTextSection';

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
            <JsonldScript jsonld={jsonlfWebpage} />
        </>
    );
};

export default HomePage;
