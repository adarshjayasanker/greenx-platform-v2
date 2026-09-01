import clsx from "clsx";

const Input = ({id, label, error, className="", ...props}) => {

    const inputId = id || props.name;

    return(
        <div className="space-y-2">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-(--color-text-primary)">{label}</label>
            )}
            <input id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : undefined} className={clsx(`block w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text-primary) outline-none transition-colors duration-200 placeholder:text-(--color-text-secondary) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10`, error && "border-(--color-error) focus:border-(--color-error) focus:ring-(--color-error)/10", className)} {...props} />
            {error && (
                <p id={`${inputId}-error`} className="text-sm text-(--color-error)">{error}</p>
            )}
        </div>
    )
};

export default Input;