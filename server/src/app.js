import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import enquiryRouter from './routes/enquiry.routes.js';
import errorHandler from './middleware/error.middleware.js';
import authRouter from './routes/auth.routes.js';
import sessionMiddleware from './config/session.js';
import requestId from './middleware/request-id.middleware.js';
import notFound from './middleware/not-found.middleware.js';

const app = express();

app.set("trust proxy", 1);

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_PREVIEW_URL,
].filter(Boolean);

app.use(requestId);
app.use(cors({
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin)){
            return callback(null, true);
        }
        return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express.json());
app.use(sessionMiddleware);

app.use('/health', healthRoutes);
app.use('/enquiry', enquiryRouter);
app.use('/auth', authRouter);

app.use(notFound);

app.use(errorHandler);

export default app;