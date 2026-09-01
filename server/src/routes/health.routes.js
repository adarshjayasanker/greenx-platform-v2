import { Router } from "express";
import healthController from '../controllers/health.controller.js';

const healthRoutes = Router();

healthRoutes.get('/', healthController.getHealth);

export default healthRoutes;