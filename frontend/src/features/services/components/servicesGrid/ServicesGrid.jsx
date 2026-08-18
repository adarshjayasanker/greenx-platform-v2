import { Section } from "@/components/ui/section";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";
import { ServiceCard } from "@/components/shared/service";


const ServicesGrid = ({services}) => {
    return(
        <Section background = "muted">
            <Container>
                <SectionHeader badge = "What We Offer" title = "Our Professional Services" description = "Reliable solutions designed to protect your home, workplace, and property." align = "center"/>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key = {service.id} service = {service} href={`/services/${service.slug}`}/>
                    ))}
                </div>
            </Container>
        </Section>
    )
};

export default ServicesGrid;