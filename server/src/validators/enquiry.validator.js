const validateCreateEnquiry = (data) => {

    const errors = {};

    if(typeof data.name !== "string" || !data.name.trim()){
        errors.name = "Name is required";
    }

    if(typeof data.phone !== "string" || !data.phone.trim()){
        errors.phone = "Phone number is required"
    }

    if(typeof data.email !== "string" || !data.email.trim()){
        errors.email = "Email is required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        errors.email = "Please provide a valid email address";
    }

    if(typeof data.service !== "string" || !data.service.trim()){
        errors.service = "Service is required"
    }

    if(typeof data.message !== "string" || !data.message.trim()){
        errors.message = "Message is required"
    }

    return errors;
};

export default validateCreateEnquiry;