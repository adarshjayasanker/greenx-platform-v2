import {Section} from '@/components/ui/section';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import {Badge} from '@/components/ui/badge';

import {ShieldCheck, Check, Leaf} from '@/lib/icons';

import { aboutPage } from "../../config/about-page.config";

const iconMap = {
    ShieldCheck,
    Check,
    Leaf
}

const ValuesSection = () => {

    const {badge, title, description, items} = aboutPage.values;

    return(
        <Section spacing="lg" className="bg-(--color-background-muted)">
                <div className='mx-auto max-w-3xl text-center'>
                    <div className='flex flex-col items-center gap-5'>
                        <Badge>{badge}</Badge>
                        <Heading level={2}>{title}</Heading>
                        <Text className="max-w-2xl">{description}</Text>
                    </div>
                </div>
                <div className='mt-12 grid gap-6 md:grid-cols-3'>
                    {items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return(
                            <article key={item.id} className='rounded-2xl border border-(--color-border) bg-(--color-background) p-6 transition-shadow duration-200 hover:shadow-md'>
                                <div className='flex flex-col items-center text-center'>
                                    {Icon && (
                                        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-primary)/10 text-(--color-primary)'>
                                            <Icon size={24}/>
                                        </div>
                                    )}
                                    <Heading level={3} className="mt-5">{item.title}</Heading>
                                    <Text className="mt-3">{item.description}</Text>
                                </div>
                            </article>
                        )
                    })}
                </div>
        </Section>
    )
};

export default ValuesSection;