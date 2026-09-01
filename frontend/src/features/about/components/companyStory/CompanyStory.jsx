import { aboutPage } from "../../config/about-page.config";

import {Section} from '@/components/ui/section';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import {Badge} from '@/components/ui/badge';
import Container from "../../../../components/ui/container";

const CompanyStory = () => {

    const {badge, title, paragraphs} = aboutPage.story;

    return(
        <Section spacing="lg">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="max-w-xl">
                        <div className="flex flex-col gap-5">
                            <Badge>{badge}</Badge>
                            <Heading level={2}>{title}</Heading>
                        </div>
                        <div className="mt-8 space-y-5">
                            {paragraphs.map((paragraph, index) => (
                                <Text key={index}>{paragraph}</Text>
                            ))}
                        </div>
                    </div>
                    {/* {image && (
                        <div className="overflow-hidden rounded-2xl">
                            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                        </div>
                    )} */}
                </div>
            </Container>
        </Section>
    )
};

export default CompanyStory;