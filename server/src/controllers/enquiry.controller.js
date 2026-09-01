import enquiryServices from "../services/enquiry.service.js";
import validateCreateEnquiry from "../validators/enquiry.validator.js";

const {createEnquiry} = enquiryServices;

const enquiryControllers = {

    postEnquiry: (req, res) => {
        const errors = validateCreateEnquiry(req.body);
        if(Object.keys(errors).length > 0){
            return res.status(400).json({success: false, message: "Please correct the highlighted fields", errors,})
        }
        const enquiry = createEnquiry(req.body);
        res.status(201).json({success: true, message: "Enquiry submitted successfully.", data: enquiry});
    }
};

export default enquiryControllers;