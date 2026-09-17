import Admin from '../models/admin.model.js';

const requireAuth = async(req, res, next) => {
    if(!req.session.adminId){
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }
    const admin = await Admin.findById(req.session.adminId);
    if(!admin){
        req.session.destroy(() => {});
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }
    req.admin = admin;
    next();
}

export default requireAuth;