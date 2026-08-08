import Container from "../../../../components/ui/container";
import Section from "../../../../components/ui/section/Section";
import SectionHeader from "../../../../components/ui/sectionHeader/SectionHeader";
import BenefitCard from "./BenefitCard";
import { whyChooseUs } from "../../config/why-choose-us.config";

const WhyChooseUs = () => {
    return(
        <Section>
            <Container>
                <SectionHeader badge={whyChooseUs.badge} title={whyChooseUs.title} description={whyChooseUs.description} align="center"/>
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {whyChooseUs.benefits.map((benefit) => (
                        <BenefitCard key={benefit.id} benefit={benefit}/>
                    ))}
                </div>
            </Container>
        </Section>
    )
};

export default WhyChooseUs;