import clsx from "clsx";
import { Star } from "lucide-react";

const Rating = ({value = 5, max = 5, size = 18, className}) => {
    return(
        <div className={clsx("flex items-center gap-1 text-amber-500", className)} aria-label={`${value} out of ${max} stars`}>
            {Array.from({length: max}).map((_, index) => (
                <Star key={index} size={size} fill={index < value ? "currentColor" : "none"}/>
            ))}
        </div>
    )
};

export default Rating;