const validateCreateActivity = (req, res, next) => {

    const {type, message} = req.body;

    if(type !== "note"){
        return res.status(400).json({
            success: false,
            message: "Invalid activity type.",
        });
    };

    if(typeof message !== "string" || !message.trim()){
        return res.status(400).json({success: false, message: "Activity message is required."});
    };

    if(message.trim().length > 2000){
        return res.status(400).json({
            success: false,
            message: "Activity message must be 2000 characters or fewer."
        });
    };
    next();
};

export default validateCreateActivity;