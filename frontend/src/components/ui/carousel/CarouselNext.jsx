import { ChevronRight } from "lucide-react";

const CarouselNext = ({onClick, className=""}) => {
    return(
        <button type="button" onClick={onClick} aria-label="Next slide" className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-50 ${className}`}><ChevronRight size={20}/></button>
    )
};

export default CarouselNext;