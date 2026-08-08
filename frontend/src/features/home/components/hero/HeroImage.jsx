import { heroImageConfig } from "../../config/hero-image.config";

const HeroImage = () => {
    return(
        <div className="aspect-square overflow-hidden rounded-3xl">
            <img src={heroImageConfig.src} alt={heroImageConfig.alt} className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl"/>
        </div>
    )
};

export default HeroImage;