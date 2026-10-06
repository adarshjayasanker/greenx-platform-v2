import enquiryServices from "../services/enquiry.service.js";
import toEnquiryResponse from "../utils/enquiry.mapper.js";
import enquiryQueryValidator from "../validators/enquiry-query.validator.js";
import enquiryStatusValidator from "../validators/enquiry-status.validator.js";
import validateCreateEnquiry from "../validators/enquiry.validator.js";
import enquiryFollowUpValidator from "../validators/enquiry-follow-up.validator.js";

const {createEnquiry, getEnquiries, getEnquiryById, updateEnquiryStatus, updateEnquiryFollowUp} = enquiryServices;

const enquiryControllers = {

    postEnquiry: async(req, res) => {
        const errors = validateCreateEnquiry(req.body);
        if(Object.keys(errors).length > 0){
            return res.status(400).json({success: false, message: "Please correct the highlighted fields", errors})
        }
        const enquiry = await createEnquiry(req.body);
        return res.status(201).json({success: true, message: "Enquiry submitted successfully.", data: enquiry});
    }, 

    readEnquiries: async(req, res) => {
        const {errors, values} = enquiryQueryValidator.validateGetEnquiries(req.query);
        if(Object.keys(errors).length > 0){
            return res.status(400).json({
                success: false,
                message: "Invalid query parameters.",
                errors,
            });
        }
        const {enquiries, total} = await getEnquiries(values);
        const data = enquiries.map(toEnquiryResponse);
        const totalPages = Math.ceil(total/values.limit);
        return res.status(200).json({success: true, data, pagination: {page: values.page, limit: values.limit, total, totalPages,}});
    },

    getEnquiryById: async(req, res) => {
        const {id} = req.params;
        const enquiry = await getEnquiryById(id);
        if(!enquiry){
            return res.status(404).json({
                success: false,
                message: "Enquiry not found.",
            });
        }
        return res.status(200).json({
            success: true,
            data: toEnquiryResponse(enquiry)
        })
    },

    updateEnquiryStatus: async(req, res) => {
        const errors = enquiryStatusValidator.validateUpdateEnquiryStatus(req.body);
        if(Object.keys(errors).length > 0){
            return res.status(400).json({
                success: false,
                message: "Invalid enquiry status.",
                errors,
            });
        };
        const {id} = req.params;
        const {status} = req.body;
        const enquiry = await updateEnquiryStatus(id, status, req.session.adminId);
        if(!enquiry){
            return res.status(404).json({
                success: false,
                message: "Enquiry not found.",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Enquiry status updated successfully.",
            data: toEnquiryResponse(enquiry),
        })
    },

    updateEnquiryFollowUp: async(req, res) => {
        const errors = enquiryFollowUpValidator.validateFollowUp(req.body);
        if(Object.keys(errors).length > 0){
            return res.status(400).json({
                success: false,
                message: "Invalid follow-up date.",
                errors,
            });
        }
        const {id} = req.params;
        const {followUpAt} = req.body;
        const enquiry = await updateEnquiryFollowUp(id, followUpAt, req.session.adminId);
        if(!enquiry){
            return res.status(404).json({
                success: false,
                message: "Enquiry not found."
            });
        }
        return res.status(200).json({
            success: true,
            message: followUpAt === null ? "Follow-up date cleared successfully." : "Follow-up date updated successfully.",
            data: toEnquiryResponse(enquiry),
        })
    }
};

export default enquiryControllers;