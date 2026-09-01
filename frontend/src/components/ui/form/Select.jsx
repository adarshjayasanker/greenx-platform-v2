import clsx from "clsx";

const Select = ({id, name, value, defaultValue, disabled = false, required = false, children, className = "", ...props}) => {

    return(
        <select name={name} id={id} value={value} defaultValue={defaultValue} disabled={disabled} required={required} className={clsx(
            "w-full rounded-lg border border-(--color-border) bg-white px-4 py-3",
            "text-(--color-text-primary)",
            "transition-colors duration-200",
            "focus:border-(--color-primary) focus:outline-none",
            "focus:ring-2 focus:ring-(--color-primary)/20",
            "disabled:cursor-not-allowed disabled:bg-(--color-surface) disabled:opacity-60",
            className
        )} {...props}>{children}</select>
    )
};

export default Select;