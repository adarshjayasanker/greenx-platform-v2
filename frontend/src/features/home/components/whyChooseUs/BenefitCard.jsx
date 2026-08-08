import { Clock3, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import Card from "../../../../components/ui/card/Card";
import CardContent from "../../../../components/ui/card/CardContent";
import IconBadge from "@/components/ui/iconBadge";

const iconMap = {
    team: Users,
    shield: ShieldCheck,
    clock: Clock3,
    heart: HeartHandshake
}

const BenefitCard = ({benefit}) => {
    const Icon = iconMap[benefit.icon];
    return(
        <Card className="h-full transition-all duration-300">
            <CardContent className="space-y-5">
                <IconBadge>
                    {Icon && <Icon size={28} />}
                </IconBadge>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="leading-7 text-(--color-text-secondary)">{benefit.description}</p>
                </div>
            </CardContent>
        </Card>
    )
};

export default BenefitCard;