import { Section } from "@/components/ui/section";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";
import { galleryPreview } from "../../config/gallery-preview.config";
import { LinkButton } from "@/components/ui/button";
import GalleryCarousel from "./GalleryCarousel";

const GalleryPreview = () => {
    return(
        <Section background="muted">
            <Container>
                <SectionHeader badge={galleryPreview.badge} title={galleryPreview.title} description={galleryPreview.description} align="center"/>
                <div className="mt-16">
                    <GalleryCarousel images={galleryPreview.images}/>
                </div>
                <div className="mt-12 flex justify-center">
                    <LinkButton to={galleryPreview.action.to} variant="primary">{galleryPreview.action.label}</LinkButton>
                </div>
            </Container>
        </Section>
    )
};

export default GalleryPreview;