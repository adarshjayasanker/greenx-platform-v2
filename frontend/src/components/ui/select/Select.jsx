import clsx from "clsx";

const Select = ({id, label, error, className="", children, ...props}) => {

    const selectId = id || props.name;

    return(
        <div className="space-y-2">
            {label && (
                <label htmlFor={selectId} className="block text-sm font-medium text-(--color-text-primary)">{label}</label>
            )}
            <select id={selectId} aria-invalid={Boolean(error)} aria-describedby={error ? `${selectId}-error` : undefined} className={clsx(`block w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text-primary) outline-none transition-colors duration-200 placeholder:text-(--color-text-secondary) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10`, error && "border-(--color-error) focus:border-(--color-error) focus:ring-(--color-error)/10", className)} {...props}>{children}</select>
            {error && (
                <p id={`${selectId}-error`} className="text-sm text-(--color-error)">{error}</p>
            )}
        </div>
    )
};

export default Select;