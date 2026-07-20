import clsx from "clsx";
import Container from "../container/Container.jsx";


const sizes = {
    none: "",
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
}


const Section = ({as: Component = "section", size = "md", className = "", children}) => {

    const sectionSize = sizes[size] || sizes.md;

    return(
        <Component className={clsx(sectionSize, className)}>
            <Container>{children}</Container>
        </Component>
    )
};

export default Section;