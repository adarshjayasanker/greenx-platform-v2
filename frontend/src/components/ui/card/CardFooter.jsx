const CardFooter = ({children, className = ""}) => {
    return(
        <div className={`mt-6 ${className}`}>{children}</div>
    )
};

export default CardFooter;