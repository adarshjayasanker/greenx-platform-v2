import {Section} from '@/components/ui/section';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import {Badge} from '@/components/ui/badge';


import { aboutPage } from "../../config/about-page.config";

import {Check} from '@/lib/icons';


const WhyChooseUs = () => {

    const {badge, title, description, points} = aboutPage.whyChooseUs;

    return(
        <Section spacing="lg">
                <div className='grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
                    <div className='max-w-xl'>
                        <div className='flex flex-col gap-5'>
                            <Badge>{badge}</Badge>
                            <Heading level={2}>{title}</Heading>
                            <Text>{description}</Text>
                        </div>
                    </div>
                    <div className='grid gap-6 sm:grid-cols-2'>
                        {points.map((point) => (
                            <article key={point.id} className='flex gap-4 rounded-2xl border border-(--color-border) p-6'>
                                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-primary)/10 text-(--color-primary)'>
                                    <Check size={20}/>
                                </div>
                                <div>
                                    <Heading level={3}>{point.title}</Heading>
                                    <Text className="mt-2">{point.description}</Text>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
        </Section>
    )
};

export default WhyChooseUs;