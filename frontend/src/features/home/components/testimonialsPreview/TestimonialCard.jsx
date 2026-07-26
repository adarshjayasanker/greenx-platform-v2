import { Quote, Star } from "lucide-react";
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";

const TestimonialCard = ({testimonial}) => {
    return(
        <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex h-full flex-col gap-6">
                <div className="flex items-start justify-between">
                    <div className="flex gap-1 text-amber-500">
                        {Array.from({length: testimonial.rating}).map((_, index) => (
                            <Star key={index} size={18} fill="currentColor"/>
                        ))}
                    </div>
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