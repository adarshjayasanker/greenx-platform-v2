import apiClient from "./client";

const createEnquiry = async(enquiryData) => {
    return apiClient('/enquiry', {
        method: "POST",
        body: JSON.stringify(enquiryData),
    });
};

const getEnquiries = async({
    page = 1,
    limit = 20,
    status = "",
    search = "",
} = {}) => {
    const params = new URLSearchParams();
    params.set("page", page);
    params.set("limit", limit);
    if(status){
        params.set("status", status);
    }
    if(search){
        params.set("search", search);
    }
    return apiClient(`/enquiry?${params.toString()}`);
};

const getEnquiryById = async(id) => {
    return apiClient(`/enquiry/${id}`);
}

const updateEnquiryStatus = async(id, status) => {
    return apiClient(`/enquiry/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({status}),
    });
};

const getEnquiryActivities = async(id) => {
    return apiClient(`/enquiry/${id}/activities`);
};

const createEnquiryNote = async(id, message) => {
    return apiClient(`/enquiry/${id}/activities`,{
        method: "POST",
        body: JSON.stringify({
            type: "note",
            message,
        }),
    });
};

export default {createEnquiry, getEnquiries, getEnquiryById, updateEnquiryStatus, getEnquiryActivities, createEnquiryNote};