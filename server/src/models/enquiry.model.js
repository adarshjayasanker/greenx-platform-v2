import mongoose from 'mongoose';
import { ENQUIRY_STATUSES } from '../constants/enquiry.constants.js';

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
            minlength: 7,
            maxlength: 20,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 254,
        },

        service: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
        },

        status: {
            type: String,
            enum: ENQUIRY_STATUSES,
            default: "new",
        },

        followUpAt: {
            type: Date,
            default: null,
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