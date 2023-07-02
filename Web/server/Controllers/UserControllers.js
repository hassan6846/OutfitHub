const User = require("../models/UserModel");
const crypto = require("crypto")
const ErrorHandler = require("../utils/errorhandler")
const sendToken = require("../utils/JwtToken")
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const sendEmail = require("../utils/SendMail")
const express = require("express")
const jwt = require("jsonwebtoken")
const bycrpt = require("bcryptjs")

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
    //geting data
    const email = req.body.email;
    const password = req.body.password
    //not email or password
    if (!email || !password) {
        res.status(401).json({
            sucess: false,
            message: "kindly fill all fields"
        })
    }
    //checking if email exits
    try {
        const checkEmail = await User.findOne({ email: email })
        //if we'll find the email already exits
        if (checkEmail) {

        }
        //if not then tell that to create account instead
        if (!checkEmail) {
            return res.status(404).json({
                "msg": "User doesn't already exists Create Account instead"
            })
        }


    }
    //if not exits
    catch (err) {
        console.log(err)
    }

})