import apiClient from "./client";

const createEnquiry = async(enquiryData) => {
    return apiClient('/enquiry', {
        method: "POST",
        body: JSON.stringify(enquiryData),
    });
};

export default {createEnquiry};