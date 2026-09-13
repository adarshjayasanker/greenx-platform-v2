import { Router } from "express";
import enquiryControllers from "../controllers/enquiry.controller.js";
import asyncHandler from "../utils/asyncHandler.js";

const {postEnquiry} = enquiryControllers;

const enquiryRouter = Router();

enquiryRouter.post('/', asyncHandler(postEnquiry));

export default enquiryRouter;