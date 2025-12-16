const Contact=require("../models/Contact-model");


const submitContactForm=async(req,res)=>{
    try{
       const { full_name,email,phone_number,message }=req.body;
       await Contact.create({full_name,email,phone_number,message});
       res.status(201).json({message:"send successfully"});
    }catch(error){
      res.status(500).json({error});
    }
   

}
module.exports=submitContactForm;