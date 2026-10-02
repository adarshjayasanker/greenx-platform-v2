const statusDescriptions = {
    new: "This enquiry has not been marked as contacted yet.",
    contacted: "Initial contact has been recorded.",
    "in-progress": "This enquiry is currently being followed up.",
    converted: "This enquiry has been converted into a customer or job.",
    closed: "This enquiry is no longer being actively pursued.",
};

const getEnquiryStatusDescription = (status) => {
    return(
        statusDescriptions[status] || "Current enquiry status."
    )
};

export default getEnquiryStatusDescription;
