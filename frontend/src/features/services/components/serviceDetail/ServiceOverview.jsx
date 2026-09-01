import Section from "../../../../components/ui/section/Section";
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';

const ServiceOverview = ({service}) => {
    return(
        <Section background="muted">
                <div className="mx-auto max-w-3xl">
                    <Heading level={2}>
                        About {service.title}
                    </Heading>
                    <Text className="mt-6">{service.description}</Text>
                </div>
        </Section>
    )
};

export default ServiceOverview;