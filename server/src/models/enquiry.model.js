import mongoose from 'mongoose';

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
            enum: [
                "new",
                "contacted",
                "in-progress",
                "converted",
                "closed",
            ],
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

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;