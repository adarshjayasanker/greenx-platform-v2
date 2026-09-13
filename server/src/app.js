import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import enquiryRouter from './routes/enquiry.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRoutes);
app.use('/enquiry', enquiryRouter);

app.use(errorHandler);

export default app;