import {Section} from '@/components/ui/section'
import Container from '@/components/ui/container';
import SectionHeader from '@/components/ui/sectionHeader';
import {testimonialsPreview} from './config/testimonials-preview.config'
import TestimonialCard from './TestimonialCard';
import { LinkButton } from '@/components/ui/button';


const TestimonialsPreview = () => {
    return(
        <Section>
            <Container>
                <SectionHeader badge={testimonialsPreview.badge} title={testimonialsPreview.title} description={testimonialsPreview.description} align="center"/>
                <div className='mt-16 grid gap-8 lg:grid-cols-3'>
                    {testimonialsPreview.testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
                    ))}
                </div>
                <div className='mt-16 flex justify-center'>
                    <LinkButton to={testimonialsPreview.action.to} variant="primary">{testimonialsPreview.action.label}</LinkButton>
                </div>
            </Container>
        </Section>
    )
};

export default TestimonialsPreview;