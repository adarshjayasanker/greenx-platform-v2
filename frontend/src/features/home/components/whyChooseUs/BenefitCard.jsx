import { Clock3, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";

const iconMap = {
    team: Users,
    shield: ShieldCheck,
    clock: Clock3,
    heart: HeartHandshake
}

const BenefitCard = ({benefit}) => {
    const Icon = iconMap[benefit.icon];
    return(
        <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="space-y-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--color-primary-100) text-(--color-primary)">
                    {Icon && <Icon size={28} />}
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="leading-7 text-(--color-text-secondary)">{benefit.description}</p>
                </div>
            </CardContent>
        </Card>
    )
};

export default BenefitCard;