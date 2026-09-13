import Enquiry from "../models/enquiry.model.js";

const enquiryServices = {

    createEnquiry: async(data) => {
        const enquiry = await Enquiry.create(data);
        return enquiry;
    }
};

export default enquiryServices;