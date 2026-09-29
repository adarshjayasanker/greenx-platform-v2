import express from 'express';
import requireAuth from '../middleware/auth.middleware.js';
import dashboardController from '../controllers/dashboard.controller.js';

const {getOverview} = dashboardController;

const dashboardRouter = express.Router();

dashboardRouter.get('/overview', requireAuth, getOverview);

export default dashboardRouter;