import Banner from '@/components/home/Banner';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import LpNavbar from '@/components/home/LpNavbar';
import PricingSection from '@/components/home/PricingSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import Footer from '@/components/share/Footer';
import HeaderSection from '@/components/share/HeaderSection';
import RichTextSection from '@/components/share/RichTextSection';

const HomePage = () => {
    return (
        <>
            {/* <LpNavbar /> */}
            {/* <Banner /> */}
            <HeroSection />
            <FeatureSection />
            {/* <HeaderSection /> */}
            <CtaSection />
            <BlogSection />
            {/* <TestimonialSection /> */}
            {/* <PricingSection /> */}
            <FaqSection />
            {/* <ContactSection /> */}
            <Footer />
            {/* <RichTextSection /> */}
        </>
    );
};

export default HomePage;
