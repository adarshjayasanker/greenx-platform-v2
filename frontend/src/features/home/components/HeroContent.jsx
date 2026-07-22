import Heading from "../../../components/ui/heading/Heading";
import Text from "../../../components/ui/text/Text";
import HeroActions from "./HeroActions";
import HeroTrust from "./HeroTrust";

const HeroContent = ({content}) => {
    return(
        <div className="mx-auto max-w-xl space-y-8 lg:mx-0">
            <Text className="font-semibold uppercase tracking-wider text-(--color-primary)">{content.eyebrow}</Text>
            <Heading level={1} className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{content.title}</Heading>
            <Text className="text-base leading-7 text-(--color-text-secondary) sm:text-lg">{content.description}</Text>
            <HeroActions actions={content.actions}/>
            <HeroTrust items={content.trust}/>
        </div>

    )
};

export default HeroContent;