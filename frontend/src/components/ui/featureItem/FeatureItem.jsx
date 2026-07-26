import clsx from "clsx";

const FeatureItem = ({icon, children, className}) => {
    return(
        <div className={clsx("flex items-center gap-2", className)}>
            {icon}
            <span className="text-sm font-medium text-neutral-700">{children}</span>
        </div>
    )
};

export default FeatureItem;