import { ArrowRight, Bird, Bug, ShieldCheck } from "lucide-react";
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";
import IconBadge from "../../../../components/ui/iconBadge";

const icons = {
    ShieldCheck,
    Bird,
    Bug
};

const ServiceCard = ({service}) => {
    const Icon = icons[service.icon];
    return(
        <Card className="group h-full transition-shadow duration-300 hover:shadow-md">
            <CardContent className="flex h-full flex-col space-y-5">
                <IconBadge>
                    {Icon && <Icon size={28}/>}
                </IconBadge>
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