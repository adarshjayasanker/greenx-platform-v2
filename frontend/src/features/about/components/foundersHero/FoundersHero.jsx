import {Section} from "@/components/ui/section";
import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {Badge} from "@/components/ui/badge";

import { aboutPage } from "../../config/about-page.config";
import Container from "../../../../components/ui/container";

const FoundersHero = () => {
    const {badge, title, description, foundersImage} = aboutPage.hero;

    return (
        <Section spacing="lg">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <div className="relative h-95 overflow-hidden rounded-2xl sm:h-115 lg:h-130">
                        <img src={foundersImage.src} alt={foundersImage.alt} className="h-full w-full object-cover object-center" />
                        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--color-background) via-(--color-background)/60 to-transparent sm:h-40"/>
                    </div>
                </div>
                <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 text-center sm:mt-12">
                    <Badge>{badge}</Badge>
                    <Heading level={1}>{title}</Heading>
                    <Text variant="lead" className="max-w-2xl">{description}</Text>
                </div>
            </Container>
        </Section>
    );
};

export default FoundersHero;