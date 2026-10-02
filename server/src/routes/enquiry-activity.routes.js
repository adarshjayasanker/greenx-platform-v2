import express from 'express';
import requireAuth from '../middleware/auth.middleware.js'
import enquiryActivityController from '../controllers/enquiry-activity.controller.js';
import validateCreateActivity from '../validators/enquiry-activity.validator.js';

const {getActivities, createNote} = enquiryActivityController;

const enquiryActivityRouter = express.Router();

enquiryActivityRouter.get('/:id/activities', requireAuth, getActivities);
enquiryActivityRouter.post('/:id/activities', requireAuth, validateCreateActivity, createNote);

export default enquiryActivityRouter;