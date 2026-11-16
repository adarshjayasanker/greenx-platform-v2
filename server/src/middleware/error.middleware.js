const errorHandler = (error, req, res, next) => {
    console.error(error);
    if(error.name === "ValidationError"){
        return res.status(400).json({success: false, message: "Invalid Data.", requestId: req.requestId});
    }
    if(error.name === "CastError"){
        return res.status(400).json({
            success: false,
            message: "Invalid resource ID.",
            requestId: req.requestId,
        })
    }
    if(error.code === 11000){
        return res.status(409).json({success: false, message: "A record with this information already exists.", requestId: req.requestId,})
    }
    if(error.status === 400 && error.type === "entity.parse.failed"){
        return res.status(400).json({
            success: false,
            message: "Invalid JSON request body.",
            requestId: req.requestId,
        });
    }
    if(error.status === 413 && error.type === "entity.too.large"){
        return res.status(413).json({
            success: false,
            message: "Request body is too large.",
            requestId: req.requestId,
        });
    }
    return res.status(500).json({success: false, message: "Something went wrong.", requestId: req.requestId,})
}

export default errorHandler;