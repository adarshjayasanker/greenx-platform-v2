import clsx from "clsx";

const Textarea = ({id, name, value, defaultValue, placeholder, disabled = false, required = false, rows = 5, className = "", ...props}) => {

    return(
        <textarea id={id} name={name} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} required={required} rows={rows} className={clsx(
            "w-full resize-y rounded-lg border border-(--color-border) bg-white px-4 py-3",
            "text-(--color-text-primary) placeholder:text-(--color-text-secondary)",
            "transition-colors duration-200",
            "focus:border-(--color-primary) focus:outline-none",
            "focus:ring-2 focus:ring-(--color-primary)/20",
            "disabled:cursor-not-allowed disabled:bg-(--color-surface) disabled:opacity-60",
            className
        )} {...props} />
    )
};

export default Textarea;