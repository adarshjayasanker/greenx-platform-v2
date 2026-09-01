import {Section} from "@/components/ui/section";
import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {Badge} from "@/components/ui/badge";

import { contactPage } from "../../config/contact-page.config";

const ContactHero = () => {

    const {badge, title, description} = contactPage.hero;

    return(
        <Section spacing="lg">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                    <Badge>{badge}</Badge>
                    <Heading level={1}>{title}</Heading>
                    <Text level="bodyLg" className="max-w-2xl">{description}</Text>
                </div>
        </Section>
    )
};

export default ContactHero;