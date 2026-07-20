import NavigationItem from "../navItem";

const DesktopNav = ({items}) => {
    return(
        <nav className="flex items-center gap-8" aria-label="Primary navigation">
            {items.map(({id, label, to}) => (
                <NavigationItem key={id} label={label} to={to}/>
            ))}
        </nav>
    )
};

export default DesktopNav;