const User = require("../models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET=process.env.JWT_KEY;
const generateToken=(user)=>{
     return jwt.sign({
            id: user._id,
            email: user.email,
            role: user.role,
            auth_type: user.auth_type
        },JWT_SECRET,{ expiresIn: "1h" }
    );
}
const register=async(req,res)=>{
    try {
        const { full_name, email, phone_number, password } = req.body;

        const existingUser = await User.findOne({email});
        
        if(existingUser){
           return res.status(400).json({ message: 'Email already registered' });
        }
        const userCreated = await User.create({ full_name, email, phone_number, password });
        const token=generateToken(userCreated);
       res.status(201).json({
          message: "User registered successfully",
          user: {
          id: userCreated._id,
          full_name: userCreated.full_name,
          email: userCreated.email,
          phone_number: userCreated.phone_number,
          role: userCreated.role,
          auth_type: userCreated.auth_type,
       },
         token,
});
        
    } catch (error) {
        console.log(error);
    }
}

const login=async(req,res)=>{
    
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        const verify = await bcrypt.compare(password,user.password);
        if(!verify){
             return res.status(401).json({ message: "Invalid password" });
        }
         res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
         res.status(500).json({ message: "Server error" });
    }

}
module.exports = {register,login};