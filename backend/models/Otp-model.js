const mongoose=require("mongoose");
const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    save_otp:{
       type:String,
       required:true,
    },
    expiresAt:{
       type:Date,
       required:true,
       index:{expires:0}
    }
})
const Otp=new mongoose.model('Otp',otpSchema);

module.exports=Otp;