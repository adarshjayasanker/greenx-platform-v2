import { ENQUIRY_STATUSES } from "../constants/enquiry.constants.js";

const validateUpdateEnquiryStatus = (data) => {
    const errors = {};
    if(typeof data.status !== "string" || !ENQUIRY_STATUSES.includes(data.status)) {errors.status = "Invalid enquiry status."}
    return errors;
}

export default {validateUpdateEnquiryStatus};