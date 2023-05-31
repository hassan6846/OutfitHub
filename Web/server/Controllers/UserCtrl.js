// imports modules
const { default: mongoose } = require("mongoose");
const User=require("../models/UserModel")

// main
const CreateNewUser=async(req,res)=>{
    const email=req.body.email;
 const findUser=User.findOne(email)
//  creating data if userNot found
if(!email){
    //create a new user
    const newUser=User.create(req.body)
    res.json(newUser)
}
else{
   res.json({
    msg:"user Already Exists",
    sucess:"false"
   })
}
    
}
module.exports={CreateNewUser}