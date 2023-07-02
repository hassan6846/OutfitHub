const User = require("../models/UserModel");
const crypto = require("crypto")
const ErrorHandler = require("../utils/errorhandler")
const sendToken = require("../utils/JwtToken")
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const sendEmail = require("../utils/SendMail")
const express = require("express")
const jwt = require("jsonwebtoken")
const bycrpt = require("bcryptjs");
const catchAsyncError = require("../middlewares/catchAsyncError");

/**
 * //register a new user
 */
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    //if fields is entered incorrectly
    try {
        if (!name, !email, !password) {
            res.status(204).json({
                "sucess": false,
                "msg": "Kindly fill all fields"
            })
        }
        //check user email 
        const UserAlreadyExists = await User.find({ email:email })
        if (UserAlreadyExists) {
            res.status(409).json({
                sucess: false,
                msg: "user email already exists with this email try login instead"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
    catch (err) {
        console.log(err)
    }

})

/**
 * generate jwt
 */
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}
/**
 * loginUser
 */
exports.logout = catchAsyncErrors(async (req, res, next) => {
    //sended empety cookie that person is logout with expire time
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    //sending json of resposnse as a logout
    res.status(200).json({
        sucess: true,
        message: "logout"
    })
})
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({email }).select(password);
  
    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
    //compare password
    const saltsRate = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)
     const compareHash=await bycrpt.compare(password,hashed)
     if(user&&compareHash){
        res.send("hello logged")
     }
    sendToken(user, 200, res);
  });
  