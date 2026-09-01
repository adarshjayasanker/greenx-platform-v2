import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";

import { contactPage } from "../../config/contact-page.config";

import {Phone, Mail, MapPin} from '@/lib/icons';

const iconMap = {
    Phone, 
    Mail,
    MapPin
}

const ContactInformation = () => {

    const {title, description, items} = contactPage.information;

    return(
                <div>
                    <Heading level={2}>{title}</Heading>
                    <Text className="mt-4 max-w-md">{description}</Text>
                    <div className="mt-8 space-y-6">
                        {items.map((item) => {
                            const Icon = iconMap[item.icon];
                            const content = (
                                <div className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-primary)/10 text-(--color-primary)">
                                        <Icon size={21}/>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-(--color-text-secondary)">{item.label}</p>
                                        <p className="mt-1 wrap-break-word font-medium text-(--color-text-primary)">{item.value}</p>
                                    </div>
                                </div>
                            );
                            return item.href ? (
                                <a key={item.id} href={item.href} className="block rounded-xl transition-opacity hover:opacity-80">{content}</a>
                            ) : (
                                <div key={item.id}>{content}</div>
                            )
                        })}
                    </div>
                </div>
    )
};

export default ContactInformation;