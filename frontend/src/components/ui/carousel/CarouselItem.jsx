const CarouselItem = ({children, className=""}) => {
    return(
        <div className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}>{children}</div>
    )
};

export default CarouselItem;