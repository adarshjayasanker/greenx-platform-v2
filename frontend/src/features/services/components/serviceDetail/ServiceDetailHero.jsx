import Section from "../../../../components/ui/section/Section";
import IconBadge from '@/components/ui/iconBadge';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';

const ServiceDetailHero = ({service}) => {

    const Icon = service.icon;

    return(
        <Section spacing="lg">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    {Icon && (
                        <IconBadge size="lg">
                            <Icon size={32}/>
                        </IconBadge>
                    )}
                    <Heading level={1} className="mt-6">{service.title}</Heading>
                    <Text variant="lead" className="mt-5 max-w-2xl">{service.description}</Text>
                </div>
        </Section>
    )
};

export default ServiceDetailHero;