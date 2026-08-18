import {Section} from '@/components/ui/section';
import { servicesPage } from '../../config/services-page.config';
import Container from '@/components/ui/container';
import {Badge} from '@/components/ui/badge';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';

const ServicesHero = () => {

    const {badge, title, description} = servicesPage.hero;

    return(
        <Section spacing = "lg">
            <Container>
                <div className='mx-auto flex max-w-3xl flex-col items-center gap-5 text-center'>
                    <Badge>{badge}</Badge>
                    <Heading level = {1}>{title}</Heading>
                    <Text variant = "lead" className = "max-w-2xl">{description}</Text>
                </div>
            </Container>
        </Section>
    )
};

export default ServicesHero;