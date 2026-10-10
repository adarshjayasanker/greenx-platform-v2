const validateLogin = (data) => {
    const errors = {};
    const email = typeof data?.email === "string" ? data.email.trim() : "";
    const password = typeof data?.password === "string" ? data.password : "";
    if(!email){
        errors.email = "Email is required.";
    }else if(email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errors.email = "Please provide a valid email address."
    }
    if(!password.trim()){
        errors.password = "Password is required.";
    }
    return errors;
};

export default{validateLogin}