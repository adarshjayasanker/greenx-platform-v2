export const servicesPreview = {
    badge: "Our Services",
    title: "Professional Solutions for Every Property",
    description: "From homes to commercial spaces, Greenx delivers reliable pest control and bird netting services tailored to your needs.",
    services: [
        {
            id: "general-pest-control",
            title: "General Pest Control",
            description: "Effective treatments to eliminate and prevent common household and commercial pests.",
            icon: "ShieldCheck",
        },
        {
            id: "bird-netting", 
            title: "Bird Netting",
            description: "High-quality bird net installations that protect buildings without harming wildlife.",
            icon: "Bird",
        },
        {
            id: "termite-control",
            title: "Termite Control",
            description: "Comprehensive termite inspection, treatment, and long-term protection.",
            icon: "Bug",
        },
    ],
    action: {
        id: "view-all-services",
        label: "View All Services",
        to: "/services",
        variant: "secondary",
    }
}