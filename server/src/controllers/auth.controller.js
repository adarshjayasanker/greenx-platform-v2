import authService from "../services/auth.service.js";
import authValidator from "../validators/auth.validator.js";

const login = async(req, res) => {
    const errors = authValidator.validateLogin(req.body);
    if(Object.keys(errors).length > 0){
        return res.status(400).json({
            success: false,
            message: "Please correct the highlighted fields.",
            errors,
        });
    };
    const {email, password} = req.body;
    const admin = await authService.authenticateAdmin(email, password);
    if(!admin){
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }
    req.session.adminId = admin._id.toString();
    return res.status(200).json({
        success: true,
        message: "Credentials verified.",
        cookie: req.session.adminId,
    })
};

const getCurrentAdmin = async(req, res) => {
    const admin = req.admin;
    if(!admin){
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }
    return res.status(200).json({
        success: true,
        data: {
            id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
        },
    });
};

const logout = (req, res) => {
    req.session.destroy((error) => {
        if(error){
            return res.status(500).json({
                success: false,
                message: "Unable to log out.",
            });
        }
        res.clearCookie("connect.sid");
        return res.status(200).json({
            success: true,
            message: "Logout successful.",
        })
    })
}

export default {login, getCurrentAdmin, logout}