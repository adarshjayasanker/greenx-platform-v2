const Badge = ({children, className = ""}) => {
    return(
        <span className={`inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 ${className}`}>{children}</span>
    )
};

export default Badge;