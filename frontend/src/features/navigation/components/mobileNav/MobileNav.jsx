import clsx from "clsx";
import NavigationItem from "../navItem";
import { AnchorButton, LinkButton } from "../../../../components/ui/button";

const MobileNav = ({isOpen, items, actions, onNavigate,}) => {
    return(
        <div id="mobile-navigation" className={clsx("overflow-hidden border-t border-(--color-border) transition-all duration-300 md:hidden", isOpen ? "max-h-screen" : "max-h-0")}>
            <nav className="flex flex-col px-6 py-6" aria-label="mobile-navigation">
                <div className="flex flex-col gap-4">
                    {items.map(({id, label, to}) => (
                        <NavigationItem key={id} label={label} to={to} onClick={onNavigate}/>
                    ))}
                </div>
                <div className="mt-6 flex flex-col gap-3">
                    {actions.map((action) => action.type === "internal" ? (
                        <LinkButton key={action.id} to={action.to} fullWidth variant={action.variant} onClick={onNavigate}>{action.label}</LinkButton>
                    ) : (
                        <AnchorButton key={action.id} href={action.href} fullWidth variant={action.variant}>{action.label}</AnchorButton>
                    ))}
                </div>
            </nav>
        </div>
    )
};

export default MobileNav;