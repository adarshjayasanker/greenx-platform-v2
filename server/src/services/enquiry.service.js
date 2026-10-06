import Enquiry from "../models/enquiry.model.js";
import EnquiryActivity from "../models/enquiry-activity.model.js";

const enquiryServices = {

    createEnquiry: async(data) => {
        const enquiry = await Enquiry.create(data);
        return enquiry;
    },

    getEnquiries: async({page, limit, status, search, attention}) => {
        const skip = (page - 1) * limit;
        const filter = {};
        if(status){
            filter.status = status;
        }
        const andConditions = [];
        if(search){
            andConditions.push({
                $or: [
                    {name: {$regex: search, $options: "i"}},
                    {email: {$regex: search, $options: "i"}},
                    {phone: {$regex: search, $options: "i"}},
                ]
            })
        }
            if(attention){
                andConditions.push({
                    $or: [{
                    status: "new"
                    },{
                    followUpAt: {
                        $ne: null,
                        $lte: new Date(),
                    }
                }]
            })
        }
        if(andConditions.length > 0){
            filter.$and = andConditions;
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
    },

    updateEnquiryFollowUp: async(id, followUpAt, adminId) => {
        const enquiry = await Enquiry.findById(id);
        if(!enquiry){
            return null;
        };
        const previousFollowUpAt = enquiry.followUpAt?.getTime() ?? null;
        const nextFollowUpAt = followUpAt ? new Date(followUpAt).getTime() : null;
        if(previousFollowUpAt === nextFollowUpAt){
            return enquiry;
        }
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, {followUpAt}, {new: true, runValidators: true,});
        await EnquiryActivity.create({
            enquiry: updatedEnquiry._id,
            type: "follow-up",
            message: followUpAt ? `Follow-up scheduled for ${new Date(followUpAt).toLocaleString()}.` : "Follow-up date cleared.",
            createdBy: adminId,
        });
        return updatedEnquiry;
    }
};

export default enquiryServices;