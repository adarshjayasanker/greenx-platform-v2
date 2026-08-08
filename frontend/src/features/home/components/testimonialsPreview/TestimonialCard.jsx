
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";
import Rating from "../../../../components/ui/rating";
import {Quote} from '@/lib/icons';

const TestimonialCard = ({testimonial}) => {
    return(
        <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex h-full flex-col gap-6">
                <div className="flex items-start justify-between">
                    <Rating value={testimonial.rating}/>
                    <Quote size={28} className="text-(--color-primary-200)"/>
                </div>
                <p className="flex-1 leading-7 text-(--color-text-secondary)">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-(--color-text-secondary)">{testimonial.location}</p>
                </div>
            </CardContent>
        </Card>
    )
};

export default TestimonialCard;