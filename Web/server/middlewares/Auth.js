const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorResponse = require("../utils/error");
const jwt=require("jsonwebtoken")
const User = require("../models/UserModel");
//isAuthenticated true/false
exports.isAuthenticated=catchAsyncError(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorResponse("Please login to access this resource",401))
    }
    //add env Secret to decode
    const decodeData=jwt.verify(token,process.env.JWT_SECRET)
})
//checking weather person is admin or not
exports.AutherizedRoles=(...roles)=>{
    
}