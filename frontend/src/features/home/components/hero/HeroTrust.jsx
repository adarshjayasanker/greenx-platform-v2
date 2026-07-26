import { ShieldCheck, Users, Clock3 } from "lucide-react";
import FeatureItem from "@/components/ui/featureItem/FeatureItem";

const iconMap = {
    shield: ShieldCheck,
    users: Users,
    clock: Clock3
};

const HeroTrust = ({items}) => {
    return(
        <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {items.map((item) => {
                const Icon = iconMap[item.icon];
                return(
                    <FeatureItem key={item.id} icon={Icon ? (<Icon size={18} className="text-(--color-primary)"/>) : null}>{item.label}</FeatureItem>
                )
            })}
        </ul>
    )
};

export default HeroTrust;