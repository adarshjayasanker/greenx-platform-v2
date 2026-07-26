import { ShieldCheck, Users, Clock3 } from "lucide-react";

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
                    <li key={item.id} className="flex items-center gap-2">
                        <Icon size={18} className="text-(--color-primary)"/>
                        <span className="text-sm font-medium text-(--color-text-primary)">{item.label}</span>
                    </li>
                )
            })}
        </ul>
    )
};

export default HeroTrust;