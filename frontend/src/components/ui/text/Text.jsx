import clsx from "clsx"
import {textLevels, fontWeights, textAlignments, textColors} from "../../../design/mappings/typography"

    const tones = {
        default: "text-[var(--color-text-secondary)]",
        inverse: "text-white/80",
    };

const Text = ({as: Component = "p", level = "body", weight = "regular", tone = "default", color = "secondary", align = "left", className = "", children}) => {

    const textVariant = textLevels[level] ?? textLevels.body;

    const textTone = tones[tone] ?? tones.default;

    return(
        <Component className = {clsx(
            textVariant,
            textTone,
            fontWeights[weight] ?? fontWeights.regular,
            textAlignments[align] ?? textAlignments.left,
            textColors[color] ?? textColors.secondary, "leading-relaxed", className
        )}
        >{children}</Component>
    )
};

export default Text;