import { ENQUIRY_STATUSES } from "../constants/enquiry.constants.js";

const validateGetEnquiries = (query) => {
    const errors = {};
    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 20);
    const search = typeof query.search === "string" ? query.search.trim() : "";
    if(!Number.isInteger(page) || page < 1){
        errors.page = "Page must be a positive integer.";
    }
    if(!Number.isInteger(limit) || limit > 100){
        errors.limit = "Limit must be an integer between 1 and 100.";
    }
    if(query.status !== undefined && !ENQUIRY_STATUSES.includes(query.status)) {errors.status = "Invalid enquiry status."}
    if(search.length > 100){
        errors.search = "Search must be 100 characters or less."
    }
    return{
        errors,
        values: {
            page, limit, status: query.status, search,
        },
    };
};

export default {validateGetEnquiries};