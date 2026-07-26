import {Hero} from "@/features/home/components/hero";
import ServicesPreview from "../../features/home/components/servicesPreview/ServicesPreview";
import WhyChooseUs from "../../features/home/components/whyChooseUs";

const Home = () => {
    return(
        <>
            <Hero/>
            <ServicesPreview/>
            <WhyChooseUs/>
        </>
    )
}; 

export default Home;