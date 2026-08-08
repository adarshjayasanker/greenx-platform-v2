const GalleryImage = ({image}) => {
    return(
        <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100 hover:scale-105">
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105" />
        </div>
    )
};

export default GalleryImage;