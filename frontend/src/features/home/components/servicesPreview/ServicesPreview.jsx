import Container from "../../../../components/ui/container";
import Section from "../../../../components/ui/section/Section";
import SectionHeader from "../../../../components/ui/sectionHeader/SectionHeader";
import { servicesPreview } from "../../config/services-preview.config";
import { LinkButton } from "../../../../components/ui/button";
import { services } from "../../../../data/services";
import { ServiceCard } from "../../../../components/shared/service";

const ServicesPreview = () => {

    const previewServices = services.slice(0, 3);

    return(
        <Section>
            <Container>
                <SectionHeader badge={servicesPreview.badge} title={servicesPreview.title} description={servicesPreview.description} align="center"/>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {previewServices.map((service) => (
                        <ServiceCard key={service.id} service={service} href={`/services/${service.slug}`}/>
                    ))}
                </div>
                <div className="mt-16 flex justify-center">
                    <LinkButton to={servicesPreview.action.to} variant = "primary">{servicesPreview.action.label}</LinkButton>
                </div>
            </Container>
        </Section>
    )
};

export default ServicesPreview;