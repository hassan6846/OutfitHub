const User=require("../models/UserModel");
const crypto=require("crypto")
const ErrorHandler=require("../utils/errorhandler")
const sendToken=require("../utils/JwtToken")
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const sendEmail =require("../utils/SendMail")
const express=require("express")


//register a new user
exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}=req.body;
    const user=await User.create({
        name,
        email,
        password
    })
    //sending token
res.send(user)
    
})
//logout user
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    //sended empety cookie that person is logout with expire time
res.cookie("token",null,{
    expires:new Date(Date.now()),
httpOnly:true,
})
//sending json of resposnse as a logout
res.status(200).json({
    sucess:true,
    message:"logout"
})
})