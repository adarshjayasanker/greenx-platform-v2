const validateLogin = (data) => {
    const errors = {};
    if(typeof data.email !== "string" || !data.password){
        errors.password = "Password is required";
    }
    return errors;
};

export default{validateLogin}