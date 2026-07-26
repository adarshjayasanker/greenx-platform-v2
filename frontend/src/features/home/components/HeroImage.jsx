import { heroImageConfig } from "../config/hero-image.config";

const HeroImage = () => {
    return(
        <div className="flex aspect-square items-center justify-center rounded-2xl">
            <img src={heroImageConfig.src} alt={heroImageConfig.alt} className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl"/>
        </div>
    )
};

export default HeroImage;