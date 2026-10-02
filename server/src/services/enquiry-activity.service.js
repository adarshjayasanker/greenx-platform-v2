import EnquiryActivity from "../models/enquiry-activity.model.js"
import Enquiry from "../models/enquiry.model.js";

const getActivitiesByEnquiryId = async(enquiryId) => {
    const activities = await EnquiryActivity.find({
        enquiry: enquiryId
    }).populate("createdBy", "name email").sort({createdAt: 1, _id: 1});
    return activities;
};

const createNote = async({enquiryId, message, adminId}) => {
    const enquiry = await Enquiry.findById(enquiryId);
    if(!enquiry){
        const error = new Error("Enquiry not found.");
        error.statusCode = 404;
        throw error;
    }
    const activity = await EnquiryActivity.create({
        enquiry: enquiryId,
        type: "note",
        message: message.trim(),
        createdBy: adminId,
    });
    await activity.populate("createdBy", "name email");
    return activity;
};

const createStatusChange = async({enquiryId, previousStatus, newStatus, adminId}) => {
    const activity = await EnquiryActivity.create({
        enquiry: enquiryId,
        type: "status-change",
        message: `Status changed from "${previousStatus}" to "${newStatus}".`,
        createdBy: adminId,
    });
    await activity.populate("createdBy", "name email");
    return activity;
}

export default {getActivitiesByEnquiryId, createNote, createStatusChange};