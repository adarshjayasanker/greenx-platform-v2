import { Router } from "express";
import enquiryControllers from "../controllers/enquiry.controller.js";

const {postEnquiry} = enquiryControllers;

const enquiryRouter = Router();

enquiryRouter.post('/', postEnquiry);

export default enquiryRouter;