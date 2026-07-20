import clsx from "clsx";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ label, to, onClick, className = "" }) => {
    return (
        <NavLink
            to={to}
            end={to === "/"}
            onClick={onClick}
            className={({ isActive }) =>
                
                    clsx(
                        "inline-flex items-center rounded-md py-2 text-sm font-medium transition-colors duration-200",
                        "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2",
                    isActive
                        ? "text-(--color-primary)"
                        : "text-(--color-text-primary) hover:text-(--color-primary)",
                    className
                    )
            }
        >
            {label}
        </NavLink>
    );
};

export default NavigationItem;