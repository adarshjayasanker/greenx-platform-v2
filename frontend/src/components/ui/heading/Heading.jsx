import clsx from "clsx";

const levelStyles = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl",
    3: "text-xl",
    4: "text-lg"
};

const weights = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
}

const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
}

const leadingStyles = {
    1: "leading-tight",
    2: "leading-tight",
    3: "leading-snug",
    4: "leading-snug"
}

const tones = {
    default: "text-(--color-text-primary)",
    inverse: "text-white",
};

const Heading = ({as: Component, level = 2, weight = "bold", align = "left", tone= "default", className = "", children}) => {

    const headingLevel = levelStyles[level] ?? levelStyles[2];
    const headingWeight = weights[weight] ?? weights.bold;
    const headingAlign = aligns[align] ?? aligns.left;
    const headingLeading = leadingStyles[level] ?? leadingStyles[2];
    const headingTone = tones[tone] ?? tones.default;

    const semanticLevel = level >= 1 && level <= 6 ? level : 2;

    const Element = Component ?? `h${semanticLevel}`;

    return(
        <Element className={clsx(headingLevel, headingWeight, headingAlign, headingLeading, headingTone, className)}>{children}</Element>
    )
};

export default Heading;