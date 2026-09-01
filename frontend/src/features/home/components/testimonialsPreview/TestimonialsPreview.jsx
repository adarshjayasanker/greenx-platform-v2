import {Section} from '@/components/ui/section'
import SectionHeader from '@/components/ui/sectionHeader';
import {testimonialsPreview} from '../../config/testimonials-preview.config'
import { LinkButton } from '@/components/ui/button';
import TestimonialCarousel from './TestimonialCarousel';


const TestimonialsPreview = () => {
    return(
        <Section>
                <SectionHeader badge={testimonialsPreview.badge} title={testimonialsPreview.title} description={testimonialsPreview.description} align="center"/>
                <div className='mt-16'>
                    <TestimonialCarousel testimonials={testimonialsPreview.testimonials}/>
                </div>
                <div className='mt-16 flex justify-center'>
                    <LinkButton to={testimonialsPreview.action.to} variant="primary">{testimonialsPreview.action.label}</LinkButton>
                </div>
        </Section>
    )
};

export default TestimonialsPreview;