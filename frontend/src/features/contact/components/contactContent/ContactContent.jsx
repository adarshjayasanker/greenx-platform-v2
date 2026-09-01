import {Section} from '@/components/ui/section';
import ContactInformation from '../contactInformation';
import EnquiryForm from '../enquiryForm';

const ContactContent = () => {

    return(
        <Section spacing="lg">
                <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16'>
                    <ContactInformation/>
                    <EnquiryForm/>
                </div>
        </Section>
    )
};

export default ContactContent;