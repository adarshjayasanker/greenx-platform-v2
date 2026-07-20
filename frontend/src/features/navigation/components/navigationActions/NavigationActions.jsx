import { LinkButton} from "@/components/ui/button";
import { AnchorButton } from "../../../../components/ui/button";

const NavigationActions = ({actions}) => {
    return(
        <div className="flex items-center gap-3">
            {actions.map((action) => action.type === "internal" ? (
                <LinkButton key={action.id} to={action.to} variant={action.variant}>{action.label}</LinkButton>
            ) : (
                <AnchorButton key={action.id} href={action.href} variant={action.variant}>{action.label}</AnchorButton>
            ))}
        </div>
    )
};

export default NavigationActions;