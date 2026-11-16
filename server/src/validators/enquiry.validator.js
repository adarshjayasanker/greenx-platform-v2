const ALLOWED_FIELDS = ["name", "phone", "email", "service", "message"];

const validateCreateEnquiry = (data) => {

    const errors = {};

    if(!data || typeof data !== "object" || Array.isArray(data)){
        return{
            body: "Request body must be a valid object.",
        };
    }

    const unexpectedFields = Object.keys(data).filter((field) => !ALLOWED_FIELDS.includes(field));

    if(unexpectedFields.length > 0){
        errors.body = "Request contains unsupported fields.";
    }

    if(typeof data.name !== "string" || !data.name.trim()){
        errors.name = "Name is required.";
    }else if(data.name.trim().length > 100){
        errors.name = "Name must be 100 characters or less.";
    }

    if(typeof data.phone!=="string" || !data.phone.trim()){
        errors.phone = "Phone number is required."
    }else if(data.phone.trim().length < 7 || data.phone.trim().length > 20){
        errors.phone = "Phone number must contain between 7 and 20 characters."
    }

    if(typeof data.email!=="string" || !data.email.trim()){
        errors.email = "Email is required.";
    }else if(data.email.trim().length > 254){
        errors.email = "Email must be 254 characters or less.";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())){
        errors.email = "Please provide a valid email address.";
    }

    if(typeof data.service!=="string" || !data.service.trim()){
        errors.service = "Service is required.";
    }else if(data.service.trim().length > 100){
        errors.service = "Service must be 100 characters or less.";
    }

    if(typeof data.message!=="string" || !data.message.trim()){
        errors.message = "Message is required.";
    }else if(data.message.trim().length > 2000){
        errors.message = "Message must be 2000 characters or less."
    }

    return errors;
};

export default validateCreateEnquiry;