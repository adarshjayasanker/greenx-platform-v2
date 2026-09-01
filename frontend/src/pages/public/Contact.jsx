import SEO from '@/components/seo';
import { ContactHero, ContactContent, ContactReassurance } from '@/features/contact';

const Contact = () => {
    return(
        <>
            <SEO title="Contact Greenx | Pest Control & Bird Netting" description="Contact Greenx for professional pest control and bird netting solutions in Kerala"/>
            <ContactHero/>
            <ContactContent/>
            <ContactReassurance/>
        </>
    )
}; 

export default Contact;