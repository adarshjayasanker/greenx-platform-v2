import clsx from "clsx";

const Textarea = ({id, label, error, className="", ...props}) => {

    const textareaId = id || props.name;

    return(
        <div className="space-y-2">
            {label && (
                <label htmlFor={textareaId} className="block text-sm font-medium text-(--color-text-primary)">{label}</label>
            )}
            <textarea id={textareaId} aria-invalid={Boolean(error)} aria-describedby={error ? `${textareaId}-error` : undefined} className={clsx(`block min-h-32 w-full resize-y rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text-primary) outline-none transition-colors duration-200 placeholder:text-(--color-text-secondary) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary/10)`, error && "border-(--color-error) focus:border-(--color-error) focus:ring-(--color-error)/10", className)} {...props}/>
            {error && (
                <p id={`${textareaId}-error`} className="text-sm text-(--color-error)">{error}</p>
            )}
        </div>
    )
};

export default Textarea;