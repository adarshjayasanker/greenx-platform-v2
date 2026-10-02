import Enquiry from "../models/enquiry.model.js";
import EnquiryActivity from "../models/enquiry-activity.model.js";

const enquiryServices = {

    createEnquiry: async(data) => {
        const enquiry = await Enquiry.create(data);
        return enquiry;
    },

    getEnquiries: async({page, limit, status, search}) => {
        const skip = (page - 1) * limit;
        const filter = {};
        if(status){
            filter.status = status;
        }
        if(search){
            filter.$or = [
                {name: {$regex: search, $options: "i"}},
                {email: {$regex: search, $options: "i"}},
                {phone: {$regex: search, $options: "i"}},
            ]
        }
        const [enquiries, total] = await Promise.all([
            Enquiry.find(filter).sort({createdAt: -1, _id: -1,}).skip(skip).limit(limit),
            Enquiry.countDocuments(filter)
        ]);
        return {enquiries, total};
    },

    getEnquiryById: async(id) => {
        const enquiry = await Enquiry.findById(id);
        return enquiry;
    },

    updateEnquiryStatus: async(id, status, adminId) => {
        const enquiry = await Enquiry.findById(id);
        if(!enquiry){
            return null;
        };
        const previousStatus = enquiry.status;
        if(previousStatus === status){
            return enquiry;
        }
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, {status}, {new: true, runValidators: true});
        await EnquiryActivity.create({
            enquiry: updatedEnquiry._id,
            type: "status-change",
            message: `Status changed from "${previousStatus}" to "${status}".`,
            createdBy: adminId,
        });
        return updatedEnquiry;
    }
};

export default enquiryServices;