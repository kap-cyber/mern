const User = require("../models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Otp=require("../models/Otp-model");
const nodemailer=require("nodemailer");
const getOtpMailOptions=require("../utils/getOtpMailOptions");
const EMAIL_USER=process.env.EMAIL_USER;
const EMAIL_PASS=process.env.EMAIL_PASS;
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
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
        const userCreated = await User.create({ full_name, email, phone_number, password:hashedPassword });
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
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};
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
        const token=generateToken(user);
           res.status(200).json({
          message: "Login Successfully",
          user: {
          id: user._id,
          full_name: user.full_name,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role,
          auth_type: user.auth_type,
       },
       token
});
    } catch (error) {
        console.log(error);
         res.status(500).json({ message: "Server error" });
    }

}
const genrateOtp=async(req,res)=>{
    try{
        const {email}=req.body;
       const user=await User.findOne({email});
       if(!user){
         return res.status(404).json({ message: "User not found" });
      }
    const otp =  Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.create({
        email,
        save_otp:otp,
        expiresAt:new Date(Date.now() + 5 * 60 * 1000)
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const mailOptions=getOtpMailOptions(email,otp); 
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "OTP sent successfully"
    });
    }catch(error){
        console.log(error);
    }

}
const VerifyOtp=async(req,res)=>{
    try{
    const {email,otp}=req.body;
    const record=await Otp.findOne({email});
    const user = await User.findOne({email});
    if(!record){
        return res.status(400).json({ message: "OTP not found" });
    }
    if(record.expiresAt < new Date()){
      await Otp.deleteOne({ email });
      return res.status(400).json({ message: "OTP expired" });
    }
    if (record.save_otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    await Otp.deleteOne({ email });
    const token=generateToken(user);
       res.status(200).json({
      message: "OTP verified successfully",
      token
    });
}catch (error) {
    console.error("VERIFY OTP ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }

};
module.exports = {register,login,genrateOtp,VerifyOtp};