import {Hero} from "@/features/home/components/hero";
import ServicesPreview from "../../features/home/components/servicesPreview/ServicesPreview";
import WhyChooseUs from "../../features/home/components/whyChooseUs";
import TestimonialsPreview from "../../features/home/components/testimonialsPreview";

const Home = () => {
    return(
        <>
            <Hero/>
            <ServicesPreview/>
            <WhyChooseUs/>
            <TestimonialsPreview/>
        </>
    )
}; 

export default Home;