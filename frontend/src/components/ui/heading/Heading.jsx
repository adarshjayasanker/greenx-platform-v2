import clsx from "clsx";

const levels = {
    display: "text-6xl",
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
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

const Heading = ({as: Component = "h2", level = 2, weight = "bold", align = "left", className = "", children}) => {

    const headingLevel = levels[level] || levels[2];
    const headingWeight = weights[weight] || weights.bold;
    const headingAlign = aligns[align] || aligns.left;

    return(
        <Component className={clsx(headingLevel, headingWeight, headingAlign, "text-(--color-text-primary) leading-tight", className)}>{children}</Component>
    )
};

export default Heading;