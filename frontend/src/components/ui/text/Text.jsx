import clsx from "clsx"
import {textLevels, fontWeights, textAlignments, textColors} from "../../../design/mappings/typography"


const Text = ({as: Component = "p", level = "body", weight = "regular", color = "secondary", align = "left", className = "", children}) => {
    return(
        <Component className = {clsx(
            textLevels[level] || textLevels.body,
            fontWeights[weight] || fontWeights.regular,
            textAlignments[align] || textAlignments.left,
            textColors[color] || textColors.secondary, "leading-relaxed", className
        )}
        >{children}</Component>
    )
};

export default Text;