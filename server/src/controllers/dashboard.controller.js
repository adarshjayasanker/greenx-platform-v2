import dashboardService from '../services/dashboard.service.js';
import asyncHandler from '../utils/asyncHandler.js';
const getOverview = asyncHandler(async(req, res) => {
    const overview = await dashboardService.getOverview();
    return res.status(200).json({success: true, data: overview});
});

export default {getOverview};