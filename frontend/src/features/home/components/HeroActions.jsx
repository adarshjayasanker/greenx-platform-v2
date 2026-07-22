import { Button } from "../../../components/ui/button";

const HeroActions = ({actions}) => {
    return(
        <div className="flex flex-col gap-4 sm:flex-row">
            {actions.map((action) => (
                <Button key={action.id} to={action.to} variant={action.variant} className="w-full sm:w-auto">{action.label}</Button>
            ))}
        </div>
    )
};

export default HeroActions;