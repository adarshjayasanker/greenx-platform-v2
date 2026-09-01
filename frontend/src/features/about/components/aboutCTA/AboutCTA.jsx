import {Section} from '@/components/ui/section';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import {Badge} from '@/components/ui/badge';
import {LinkButton} from '@/components/ui/button';


import { aboutPage } from "../../config/about-page.config";
import Container from '../../../../components/ui/container';

const AboutCTA = () => {

    const {badge, title, description, action} = aboutPage.cta;

    return(
        <Section spacing="lg" background="brand">
            <Container>
                <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
                    <Badge variant="inverse">{badge}</Badge>
                    <Heading level={2} className="mt-5 text-white">{title}</Heading>
                    <Text className="mt-5 max-w-2xl text-white/85">{description}</Text>
                    <div className='mt-8'>
                        <LinkButton to={action.to} variant={action.variant}>{action.label}</LinkButton>
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default AboutCTA;