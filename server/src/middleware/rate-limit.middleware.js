import {rateLimit} from 'express-rate-limit';

export const enquiryRateLimiter = rateLimit({
    windowMs: 15*60*1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many enquiries submitted. Please try again later.",
    },
});

export const loginRateLimiter = rateLimit({
    windowMs: 15*60*1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    message: {
        success: false,
        message: "Too many login attempts. Please try again later."
    }
})