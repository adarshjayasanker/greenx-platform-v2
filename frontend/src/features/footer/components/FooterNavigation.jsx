import { NavLink } from "react-router-dom";

const FooterNavigation = ({items}) => {
    return(
        <nav aria-label="Footer Navigation">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
                {items.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.to} className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default FooterNavigation;