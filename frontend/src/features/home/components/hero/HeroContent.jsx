import { Badge } from "../../../../components/ui/badge";
import Heading from "../../../../components/ui/heading/Heading";
import Text from "../../../../components/ui/text/Text";
import HeroActions from "./HeroActions";
import HeroTrust from "./HeroTrust";

const HeroContent = ({content}) => {
    return(
        <div className="mx-auto max-w-xl lg:mx-0">
            <div className="space-y-4">
                <Badge>{content.eyebrow}</Badge>
                <Heading level={1} className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{content.title}</Heading>
            </div>
            <div className="mt-6">
                <Text className="text-base leading-7 text-(--color-text-secondary) sm:text-lg">{content.description}</Text>
            </div>
            <div className="mt-10">
                <HeroActions actions={content.actions}/>
            </div>
            <div className="mt-12">
                <HeroTrust items={content.trust}/>
            </div>
        </div>

    )
};

export default HeroContent;