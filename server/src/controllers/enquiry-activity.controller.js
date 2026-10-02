import enquiryActivityService from '../services/enquiry-activity.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import toEnquiryActivityResponse from '../utils/enquiry-activity.mapper.js';

const getActivities = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const activities = await enquiryActivityService.getActivitiesByEnquiryId(id);
    return res.status(200).json({
        success: true,
        activities: activities.map(toEnquiryActivityResponse),
    });
});

const createNote = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const {message} = req.body;
    const activity = await enquiryActivityService.createNote({
        enquiryId: id,
        message,
        adminId: req.session.adminId,
    });
    return res.status(201).json({
        success: true,
        activity: toEnquiryActivityResponse(activity),
    });
}) 

export default {getActivities, createNote};