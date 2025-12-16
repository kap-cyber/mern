const mongoose=require('mongoose');

const contactSchema= new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
    {
        timestamps:true
    }
);
const Contact= new mongoose.model("Contact",contactSchema);
module.exports=Contact;