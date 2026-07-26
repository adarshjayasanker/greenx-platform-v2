import { ArrowRight, Bird, Bug, ShieldCheck } from "lucide-react";
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";

const icons = {
    ShieldCheck,
    Bird,
    Bug
};

const ServiceCard = ({service}) => {
    const Icon = icons[service.icon];
    return(
        <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex h-full flex-col space-y-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--color-primary-100) text-(--color-primary)">
                    {Icon && <Icon size={18}/>}
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="leading-7 text-(--color-text-secondary)">{service.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 font-medium text-(--color-primary)">
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
                </div>
            </CardContent>
        </Card>
    )
};

export default ServiceCard;