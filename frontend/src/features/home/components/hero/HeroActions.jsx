import { LinkButton } from "../../../../components/ui/button";

const HeroActions = ({actions}) => {
    return(
        <div className="flex flex-col gap-4 sm:flex-row">
            {actions.map((action) => (
                <LinkButton key={action.id} to={action.to} variant={action.variant} className="w-full sm:w-auto">{action.label}</LinkButton>
            ))}
        </div>
    )
};

export default HeroActions;