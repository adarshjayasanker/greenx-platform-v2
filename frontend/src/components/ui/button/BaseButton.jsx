import clsx from "clsx";

const base = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed disabled: opacity-50";

const variants = {

    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

    secondary: "bg-[var(--color-secondary)] text-white",

    outline: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",

    ghost: "text-[var(--color-primary)] hover:bg-gray-100",

    danger: "bg-[var(--color-error)] text-white hover:opacity-90",
};

const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
};

const BaseButton = ({as: Component, variant = "primary", size = "md", fullWidth = false, className = "", children, ...props}) => {
    return(
        <Component className={clsx(base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, fullWidth && "w-full", className)}{...props}>{children}</Component>
    )
};

export default BaseButton;