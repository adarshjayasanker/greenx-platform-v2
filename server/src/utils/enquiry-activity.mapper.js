const toEnquiryActivityResponse = (activity) => ({
    id: activity._id,
    enquiryId: activity.enquiry,
    type: activity.type,
    message: activity.message,
    createdBy: activity.createdBy,
    createdAt: activity.createdAt,
    updatedAt: activity.updatedAt,
});

export default toEnquiryActivityResponse;