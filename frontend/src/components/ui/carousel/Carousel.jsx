import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const Carousel = ({children, options={}, ariaLabel, className=""}) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    return(
        <div className={`relative ${className}`} role='region' aria-roledescription='carousel' aria-label={ariaLabel}>
            <div ref={emblaRef} className='overflow-hidden'>
                {children({
                    emblaApi, scrollPrev, scrollNext
                })};
            </div>
        </div>
    )

};

export default Carousel;