import clsx from "clsx";

const sizes = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16"
};

const IconBadge = ({children, size = "md", className="",}) => {
    return(
        <div className={clsx("flex shrink-0 items-center justify-center rounded-xl bg-(--color-primary-100) text-(--color-primary)", sizes[size] ?? sizes.md, className)}>{children}</div>
    )
};

export default IconBadge;