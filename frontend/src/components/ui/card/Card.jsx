import clsx from "clsx";

const Card = ({children, className}) => {
    return(
        <div className={clsx("rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm", className)}>{children}</div>
    )
};

export default Card;