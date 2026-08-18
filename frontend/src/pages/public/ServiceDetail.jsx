import SEO from '@/components/seo/SEO';

import { useParams } from "react-router-dom";
import { services } from "../../data/services";
import ServiceDetailHero from '../../features/services/components/serviceDetail/ServiceDetailHero';
import ServiceOverview from '../../features/services/components/serviceDetail/ServiceOverview';

const ServiceDetail = () => {

    const {slug} = useParams();

    const service = services.find((item) => item.slug === slug);

    if(!service){
        return(
            <>
                <SEO title = "Service Not Found | Greenx" description = "The requested Greenx service could not be found."/>
                <main>
                    <div className='mx-auto max-w-3xl px-4 py-24 text-center'>
                        <h1 className='text-3xl font-bold'>Service Not Found</h1>
                        <p className='mt-4'>The service you're looking for is not available</p>
                    </div>
                </main>
            </>
        )
    }

    return(
        <>
            <SEO title = {`${service.title} | Greenx`} description = {service.description}/>
            <ServiceDetailHero service={service}/>
            <ServiceOverview service={service}/>
        </>
    )
};

export default ServiceDetail;