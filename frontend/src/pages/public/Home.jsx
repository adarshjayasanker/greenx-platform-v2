import {Hero} from "@/features/home/components/hero";
import ServicesPreview from "../../features/home/components/servicesPreview/ServicesPreview";
import WhyChooseUs from "../../features/home/components/whyChooseUs";
import TestimonialsPreview from "../../features/home/components/testimonialsPreview";
import { GalleryPreview } from "@/features/home/components/galleryPreview";
import FinalCTA from "@/features/home/components/finalCta";

const Home = () => {
    return(
        <>
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