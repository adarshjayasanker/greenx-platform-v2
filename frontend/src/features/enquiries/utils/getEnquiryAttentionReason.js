const getEnquiryAttentionReason = (enquiry) => {
    if(enquiry.status === "new"){
        return "New Enquiry";
    }
    if(enquiry.followUpAt && new Date(enquiry.followUpAt) <= new Date()){
        return "Follow-up due";
    }
    return null;
};

export default getEnquiryAttentionReason;