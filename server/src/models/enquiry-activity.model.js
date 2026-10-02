import mongoose from 'mongoose';

import { ENQUIRY_ACTIVITY_TYPES } from '../constants/enquiry-activity.constants.js';

const enquiryActivitySchema = new mongoose.Schema({

    enquiry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Enquiry",
        required: true,
        index: true,
    },
    type: {
        type: String,
        enum: ENQUIRY_ACTIVITY_TYPES,
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
}, {timestamps: true});

enquiryActivitySchema.index({
    enquiry: 1,
    createdAt: -1,
});

const EnquiryActivity = mongoose.model("EnquiryActivity", enquiryActivitySchema);

export default EnquiryActivity;