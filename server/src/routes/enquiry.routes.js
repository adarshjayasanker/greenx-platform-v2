import { Router } from "express";
import enquiryControllers from "../controllers/enquiry.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
import requireAuth from "../middleware/auth.middleware.js";

const {postEnquiry, readEnquiries, getEnquiryById, updateEnquiryStatus} = enquiryControllers;

const enquiryRouter = Router();

enquiryRouter.post('/', asyncHandler(postEnquiry));
enquiryRouter.get('/', requireAuth, asyncHandler(readEnquiries));
enquiryRouter.get('/:id', requireAuth, asyncHandler(getEnquiryById));
enquiryRouter.patch('/:id/status', requireAuth, asyncHandler(updateEnquiryStatus));

export default enquiryRouter;