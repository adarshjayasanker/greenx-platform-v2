import clsx from 'clsx';

const variants = {
    primary: "bg-(--color-primary-100) text-(--color-primary-700)",
    neutral: "bg-neutral-100 text-neutral-700",
    inverse: "bg-white/15 text-white"
}

const Badge = ({children, variant = "primary", className = ""}) => {
    return(
        <span className={clsx("inline-flex items-center rounded-full px-4 py-2 text-sm font-medium", variants[variant], className)}>{children}</span>
    )
};

export default Badge;