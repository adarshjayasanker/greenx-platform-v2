import { Section } from "@/components/ui/section";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";
import { galleryPreview } from "../../config/gallery-preview.config";
import GalleryImage from "./GalleryImage";
import { LinkButton } from "@/components/ui/button";

const GalleryPreview = () => {
    return(
        <Section>
            <Container>
                <SectionHeader badge={galleryPreview.badge} title={galleryPreview.title} description={galleryPreview.description} align="center"/>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryPreview.images.map((image) => (
                        <GalleryImage key={image.id} image={image}/>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <LinkButton to={galleryPreview.action.to} variant="primary">{galleryPreview.action.label}</LinkButton>
                </div>
            </Container>
        </Section>
    )
};

export default GalleryPreview;