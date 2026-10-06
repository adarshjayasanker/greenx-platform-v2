const toEnquiryResponse = (enquiry) => {
    return{
        id: enquiry._id,
        name: enquiry.name,
        phone: enquiry.phone,
        email: enquiry.email,
        service: enquiry.service,
        message: enquiry.message,
        status: enquiry.status,
        source: enquiry.source,
        followUpAt: enquiry.followUpAt,
        createdAt: enquiry.createdAt,
        updatedAt: enquiry.updatedAt,
    };
};

export default toEnquiryResponse;