import 'dotenv/config';

import connectDatabase from '../src/config/database.js';
import Admin from '../src/models/admin.model.js';
import passwordUtils from '../src/utils/password.js';

const seedAdmin = async() => {
    try{
       await connectDatabase();
       const existingAdmin = await Admin.findOne({email: process.env.ADMIN_EMAIL,}); 
       if(existingAdmin){
        console.log("Admin already exists.");
        process.exit(0);
       }
       const passwordHash = await passwordUtils.hashPassword(process.env.ADMIN_PASSWORD);
       await Admin.create({
        name: process.env.ADMIN_NAME,
        email: process.env.ADMIN_EMAIL,
        passwordHash,
    });
    console.log("Admin created successfully.");
    process.exit(0);
    }catch(error){
        console.error("Admin seed failed:", error.message);
        process.exit(1);
    };
};

seedAdmin();