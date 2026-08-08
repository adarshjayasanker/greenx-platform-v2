import { ChevronLeft } from "lucide-react";

const CarouselPrevious = ({onClick, className=""}) => {
    return(
        <button type="button" onClick={onClick} aria-label="Previous slide" className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-50 ${className}`}><ChevronLeft size={20}/></button>
    )
};

export default CarouselPrevious;