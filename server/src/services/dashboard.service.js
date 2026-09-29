import Enquiry from "../models/enquiry.model.js";
import toEnquiryResponse from "../utils/enquiry.mapper.js";

const getOverview = async() => {
    const [totalEnquiries, 
            newEnquiries, 
            contactedEnquiries, 
            inProgressEnquiries, 
            convertedEnquiries, 
            closedEnquiries, 
            recentEnquiries] = await Promise.all([
                                                Enquiry.countDocuments(), 
                                                Enquiry.countDocuments({status: "new"}), 
                                                Enquiry.countDocuments({status: "contacted"}), 
                                                Enquiry.countDocuments({status: "in-progress"}), 
                                                Enquiry.countDocuments({status: "converted"}), 
                                                Enquiry.countDocuments({status: "closed"}), 

                                                Enquiry.find().sort({createdAt: -1, _id: -1}).limit(5),
                                                ])
    return{
        totalEnquiries,
        newEnquiries,
        contactedEnquiries,
        inProgressEnquiries,
        convertedEnquiries,
        closedEnquiries,

        recentEnquiries: recentEnquiries.map(toEnquiryResponse),
    };
};

export default {getOverview}