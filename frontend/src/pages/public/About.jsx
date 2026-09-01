import SEO from '@/components/seo';
import {FoundersHero, CompanyStory, ValuesSection, WhyChooseUs, AboutCTA} from '@/features/about';

const About = () => {
    return(
        <>
            <SEO title="About Greenx | Pest Control & Bird Netting" description="Learn more about Greenx and our professional pest control and bird netting solutions."/>
            <FoundersHero/>
            <CompanyStory/>
            <ValuesSection/>
            <WhyChooseUs/>
            <AboutCTA/>
        </>
    )
}; 

export default About;