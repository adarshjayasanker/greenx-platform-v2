import Container from '../../../components/ui/container';
import { footerContact } from '../config/footer-contact.config';
import { footerNavigation } from '../config/footer-navigation.config';
import FooterBottom from './FooterBottom';
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import FooterNavigation from './FooterNavigation';

const Footer = () => {
    return(
        <footer className='bg-neutral-950 text-neutral-300'>
            <Container className='py-16'>
               <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                    <FooterBrand/>
                    <FooterNavigation items={footerNavigation}/>
                    <FooterContact contacts={footerContact}/>
               </div>
               <div className='mt-16 border-t border-neutral-800 pt-8'>
                    <FooterBottom/>
               </div>
            </Container>
        </footer>
    )
};

export default Footer;