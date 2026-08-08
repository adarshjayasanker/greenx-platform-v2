import {Hero} from "@/features/home/components/hero";
import ServicesPreview from "../../features/home/components/servicesPreview/ServicesPreview";
import WhyChooseUs from "../../features/home/components/whyChooseUs";
import TestimonialsPreview from "../../features/home/components/testimonialsPreview";
import { GalleryPreview } from "@/features/home/components/galleryPreview";
import FinalCTA from "@/features/home/components/finalCta";
import SEO from "@/components/seo";

const Home = () => {
    return(
        <>
            <SEO title="Greenx | Pest Control & Bird Netting Services" description="Professional pest control and bird netting solutions for homes and businesses."/>
            <Hero/>
            <ServicesPreview/>
            <WhyChooseUs/>
            <TestimonialsPreview/>
            <GalleryPreview/>
            <FinalCTA/>
        </>
    )
}; 

export default Home;