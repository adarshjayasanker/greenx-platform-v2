import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import enquiryRouter from './routes/enquiry.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRoutes);

app.use('/enquiry', enquiryRouter);

export default app;