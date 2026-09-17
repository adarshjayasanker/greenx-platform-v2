import mongoose from 'mongoose';
import { ENQUIRY_STATUSES } from '../constants/enquiry.constants.js';

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ENQUIRY_STATUSES,
            default: "new",
        },

        source: {
            type: String,
            enum: ["website"],
            default: "website",
        },
    },
    {
        timestamps: true
    }
);

enquirySchema.index({
    createdAt: -1,
})

enquirySchema.index({
    status: 1,
    createdAt: -1,
})

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;