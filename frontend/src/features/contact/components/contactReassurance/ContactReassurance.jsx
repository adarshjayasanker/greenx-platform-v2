import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {AnchorButton} from "@/components/ui/button";

import {Phone, ArrowRight} from '@/lib/icons';

import { contact } from "../../../../data/contact";

const ContactReassurance = () => {

    return(
        <section className="pb-20 sm:pb-24">
            <div className="rounded-2xl bg-(--color-surface) px-6 py-8 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
                <div className="max-w-2xl">
                    <Heading level={3}>Prefer to talk directly?</Heading>
                    <Text className="mt-2">Our team is available to help you choose the right solution for your property</Text>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                    <AnchorButton href={contact.phone.value} variant="primary">
                        <Phone size={18}/> Call Us
                    </AnchorButton>
                    <AnchorButton href={contact.whatsapp.href} variant="outline">WhatsApp Us<ArrowRight size={18}/></AnchorButton>
                </div>
            </div>
        </section>
    )
};

export default ContactReassurance;