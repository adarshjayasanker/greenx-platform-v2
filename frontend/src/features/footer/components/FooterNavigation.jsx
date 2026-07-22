import { NavLink } from "react-router-dom";

const FooterNavigation = ({items}) => {
    return(
        <nav aria-label="Footer Navigation">
            <h3>Quick Links</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default FooterNavigation;