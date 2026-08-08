import clsx from "clsx";

const spacingClasses = {
    none: "",
    sm: "py-12 lg:py-16",
    md: "py-16 lg:py-20",
    lg: "py-20 lg:py-24",
    xl: "py-24 lg:py-32",
}

const backgrounds = {
    default: "bg-white",
    muted: "bg-(--color-surface)",
    brand: "bg-(--color-primary)"
}


const Section = ({as: Component = "section", spacing = "md", background = "default", className = "", children}) => {

    const sectionSpacing = spacingClasses[spacing] ?? spacingClasses.md;

    const sectionBackground = backgrounds[background] ?? backgrounds.default;

    return(
        <Component className={clsx(sectionSpacing, sectionBackground, className)}>{children}</Component>
    )
};

export default Section;