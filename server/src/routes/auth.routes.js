import { Router } from "express";

import authController from "../controllers/auth.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
import requireAuth from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post('/login', asyncHandler(authController.login));
authRouter.get('/me', requireAuth, asyncHandler(authController.getCurrentAdmin));
authRouter.post('/logout', requireAuth, asyncHandler(authController.logout));

export default authRouter;