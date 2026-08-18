import SEO from '@/components/seo';
import { ServicesHero, ServicesGrid } from '@/features/services';

import {services} from '../../data/services'

const Services = () => {
    return(
        <>
            <SEO title = "Services | Greenx Pest Control & Bird Netting" description = "Explore professional pest control and bird netting services from Greenx." />
            <ServicesHero/>
            <ServicesGrid services = {services}/>
        </>
    )
};

export default Services;