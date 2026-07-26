import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const SectionHeader = ({badge, title, description, align = "left"}) => {
    const alignment = {
        left: "items-start text-left",
        center: "items-center text-center",
    };
    return(
        <div className={`flex flex-col gap-4 ${alignment[align]}`}>
            {badge && (
                <Badge>{badge}</Badge>
            )}
            <Heading level={2}>{title}</Heading>
            {description && (
                <Text className="mx-auto max-w-2xl text-center">{description}</Text>
            )}
        </div>
    )
};

export default SectionHeader;