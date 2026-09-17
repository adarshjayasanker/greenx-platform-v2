import Admin from '../models/admin.model.js';
import passwordUtils from '../utils/password.js';

const authenticateAdmin = async(email, password) => {
    const admin = await Admin.findOne({
        email: email.trim().toLowerCase(),
    });
    if(!admin){
        return null;
    }
    const isPasswordValid = await passwordUtils.comparePassword(password, admin.passwordHash);
    if(!isPasswordValid){
        return null;
    }
    return admin;
};



export default {authenticateAdmin}