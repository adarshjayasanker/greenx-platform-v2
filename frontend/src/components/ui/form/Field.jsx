import clsx from "clsx";

const Field = ({id, label, required = false, error = "", hint = "", children, className = ""}) => {
    const messageId = `${id}-message`;
    return(
        <div className={clsx("space-y-2", className)}>
            <label htmlFor={id} className="block text-sm font-medium text-(--color-text-primary)">{label} {required && (<span className="ml-1 text-(--color-error)" aria-hidden="true">*</span>)}</label>
            {children}
            {error ? (
                <p id={messageId} className="text-sm text-(--color-error)">{error}</p>
            ) : hint ? (
                <p id={messageId} className="text-sm text-(--color-text-secondary)">{hint}</p>
            ) : null}
        </div>
    )
};

export default Field;