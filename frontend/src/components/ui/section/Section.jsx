import clsx from "clsx";
import Container from "../container/Container.jsx";


const spacingClasses = {
    none: "",
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
}


const Section = ({as: Component = "section", spacing = "md", className = "", children}) => {

    const sectionSpacing = spacingClasses[spacing] ?? spacingClasses.md;

    return(
        <Component className={clsx(sectionSpacing, className)}>
            <Container>{children}</Container>
        </Component>
    )
};

export default Section;