import clsx from "clsx"
import {textLevels, fontWeights, textAlignments} from "../../../design/mappings/typography"

    const tones = {
        default: "text-(--color-text-secondary)",
        primary: "text-(--color-text-primary)",
        inverse: "text-white/80",
        inverseStrong: "text-white",
    };

const Text = ({as: Component = "p", level = "body", weight = "regular", tone = "default", align = "left", className = "", children}) => {

    const textVariant = textLevels[level] ?? textLevels.body;
    const textTone = tones[tone] ?? tones.default;
    const textWeight = fontWeights[weight] ?? fontWeights.regular;
    const textAlignment = textAlignments[align] ?? textAlignments.left;

    return(
        <Component className = {clsx(textVariant, textTone, textWeight, textAlignment, "leading-relaxed", className)}>{children}</Component>
    )
};

export default Text;