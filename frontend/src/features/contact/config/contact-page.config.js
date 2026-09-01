import {contact} from '../../../data/contact';


export const contactPage = {
    hero: {
        badge: "Contact Us",

        title: "Let's Find the Right Solution for Your Property",

        description:
            "Tell us what you need help with and our team will get back to you to discuss the right solution.",
    },

    information: {
        title: "Get in Touch",

        description:
            "Have a question about our pest control or bird netting services? Reach out to Greenx.",

        items: [
            {
                id: "phone",
                label: contact.phone.label,
                value: contact.phone.value,
                href: contact.phone.href,
                icon: "Phone",
            },
            {
                id: "email",
                label: contact.email.label,
                value: contact.email.value,
                href: contact.email.href,
                icon: "Mail",
            },
            {
                id: "location",
                label: contact.location.label,
                value: contact.location.value,
                icon: "MapPin",
            },
        ],
    },

    form: {
        title: "Send an Enquiry",

        description:
            "Fill in the details below and we'll get back to you.",

        submitLabel: "Send Enquiry",
    },
};