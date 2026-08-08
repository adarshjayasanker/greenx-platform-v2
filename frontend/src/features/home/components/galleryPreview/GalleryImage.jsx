const GalleryImage = ({image}) => {
    return(
        <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100">
            <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
    )
};

export default GalleryImage;