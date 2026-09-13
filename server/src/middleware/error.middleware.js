const errorHandler = (error, req, res, next) => {
    console.error(error);
    if(error.name === "ValidationError"){
        return res.status(400).json({success: false, message: "Invalid Data."});
    }
    if(error.code === 11000){
        return res.status(409).json({success: false, message: "A record with this information already exists."})
    }
    return res.status(500).json({success: false, message: "Something went wrong."})
}

export default errorHandler;