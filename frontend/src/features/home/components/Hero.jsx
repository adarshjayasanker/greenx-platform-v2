import Container from "../../../components/ui/container";
import Section from "../../../components/ui/section/Section";
import { heroContent } from "../config/hero.config";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
    return(
        <Section>
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
                    <HeroContent content={heroContent}/>
                    <HeroImage/>
                </div>
            </Container>
        </Section>
    )
};

export default Hero;