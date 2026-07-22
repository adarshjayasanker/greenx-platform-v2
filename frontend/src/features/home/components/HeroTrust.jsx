const HeroTrust = ({items}) => {
    return(
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            {items.map((item) => (
                <li key={item.id} className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                    <span className="text-(--color-primary)">✓</span>
                    <span>{item.label}</span>
                </li>
            ))}
        </ul>
    )
};

export default HeroTrust;