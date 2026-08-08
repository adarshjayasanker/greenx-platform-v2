import {Carousel} from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialCarousel = ({testimonials}) => {
    return(
        <Carousel options={{align: "start", loop: true}}>
            {({scrollPrev, scrollNext}) => (
                <>
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard testimonial={testimonial}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-8 flex justify-center gap-3">
                        <CarouselPrevious onClick={scrollPrev}/>
                        <CarouselNext onClick={scrollNext}/>
                    </div>
                </>
            )}
        </Carousel>
    )
};

export default TestimonialCarousel;