import { Carousel } from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import GalleryImage from "./GalleryImage";
import { CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";

const GalleryCarousel = ({images}) => {
    return(
        <Carousel options={{align: "start", loop: true}}>
            {({scrollPrev, scrollNext}) => (
                <>
                    <CarouselContent className="-ml-4">
                        {images.map((image) => (
                            <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <GalleryImage image={image}/>
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

export default GalleryCarousel;