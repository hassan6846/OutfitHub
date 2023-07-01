const User = require("../models/UserModel");
const crypto = require("crypto")
const ErrorHandler = require("../utils/errorhandler")
const sendToken = require("../utils/JwtToken")
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const sendEmail = require("../utils/SendMail")
const express = require("express")
const jwt = require("jsonwebtoken")
const bycrpt = require("bcrypt")

/**
 * //register a new user
 */
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    //if fields is entered incorrectly
    if (!name || !email || !password) {
        res.status(401).json({
            "msg": "kindly fill all fields"
        })

    }
    //check if user already exists
    const DuplicateEmail = await User.findOne({ email })
    if (DuplicateEmail) {
        res.status(400).json({
            "sucess":"false",
            "msg": `user already exists with  ${email}`
        })
    }
    //hashing password field
    const salt = await bycrpt.genSalt(2)
    const hashedPassword = await bycrpt.hash(password, salt)
    //creating user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    //sending token
    res.status(201).json({
        user,
        token: generateToken(user._id)
    })

})

/**
 * generate jwt
 */
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}
//logout user
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
/***
 * login user
 */
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
const {email,password}=req.body
if(!email||!password){
    res.status(400).json({
        "sucess":"false",
       "msg":"kindly fill all fields"
    })
// if not email 

}
})