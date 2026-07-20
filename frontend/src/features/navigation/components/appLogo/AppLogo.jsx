import { Link } from "react-router-dom";
import clsx from "clsx";
import { brand } from "../../config/brand.config";

const AppLogo = ({className = "", to = "/"}) => {
    return(
        <Link to={to} aria-label="Greenx Home" className={clsx("inline-flex items-center", className)}>
            <span className="text-2xl font-bold tracking-tight text-(--color-primary)">{brand.name}</span>
        </Link>
    )
};

export default AppLogo;