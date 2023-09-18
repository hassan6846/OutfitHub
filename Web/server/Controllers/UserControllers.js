const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RequestLimits = require("express-rate-limit")
const UserModel = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const router = require("../Routes/UserRoutes");
const { isAuthenticated } = require("../middlewares/Auth");
const validator = require("validator")

/*
* REGISTER 
*/
async function registerUser(req, res) {
  // Getting username, email, and password
  const { username, email, password } = req.body;
  // If any field is empty
  if (!(username || email || password)) {
    return res
      .status(400)
      .json({
        success: false,
        msg: "Kindly fill all fields",
      });
  }

  try {
    // Check if email already exists
    const duplicateEmail = await UserModel.findOne({ email });
    if (duplicateEmail) {
      return res.status(409).json({
        success: false,
        msg: "User Already Exists try login instead",
      }).redirect("/");
    }
    const user = new UserModel({
      username,
      email,
      password
    });
    // Save the user to the database
    const savedUser = await user.save();
    // Generate token for the user
    const token = jwt
      .sign({
        user_id: savedUser._id,
        name: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
      }, process.env.JWT_SECRET, { expiresIn: "15m" });
    // --sending cookie
    res
      .cookie("AccessToken", token, {
        httpOnly: true,
        path: "/",
        httpOnly: true,
        secure: true,
        expiresIn: new Date(Date.now() * 24 * 60 * 1000)
      })
      .status(201)
      .json({
        success: true,
        msg: "User created successfully",
        token,
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
}

/**
 * LOGIN USER
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Checking Email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Email Format. Please enter a valid email address.",
      });
    } else if (!email || !password) {
      // IF EMPTY FIELDS
      return res.status(400).json({
        success: false,
        msg: "Please fill in all required fields (email and password).",
      });
    }

    // FINDING USER BY EMAIL
    const FindUser = await UserModel.findOne({ email }).select("+password");
    if (!FindUser) {
      return res.status(404).json({
        success: false,
        msg: "Invalid Credentials",
      })
    }
    // MATCH PASSWORD HASH
    const isPasswordMatched = await FindUser.comparePassword(password)
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Credentials"
      })
    }

    const LOGIN_Token = jwt.sign({
      id: FindUser._id,
      name: FindUser.username,
      email: FindUser.email,
      role: FindUser.role,
    }, process.env.JWT_SECRET, { expiresIn: "15m" })

      if (isPasswordMatched) {
      return res
        .cookie("AccessToken", LOGIN_Token)
        .status(200)
        .json({
          Success: true,
          Msg: "HELLO FROM INSIDE",
          Token: LOGIN_Token
        })
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
};

/**
 * logout 
 */
const Userlogout = async (req, res, next) => {
  // Set the cookie with an expiration time of 12 seconds
  res.cookie('AccessToken', null, {
    expires: new Date(Date.now()), // Add 12000 milliseconds (12 seconds) to the current time
    httpOnly: true,
    secure: true,
    path:"/"
  });
  res.status(200).json({
    success: true,
    message: 'Logged Out Sucessfully',
  });
};
/**
 * forgot password 
 * method post
 * requires email only
 * type user
 */
const ForgotPassword=async(req,res,next)=>{
  // Requirng Email
  const {email}=req.body
  try{
    // if EMPTY FIELD
    if(!(email)){
     return res
     .status(404)
     .json({
    Success:false,
    "MSG":"Kindly fill all the fields"
     })
    }
    // VALIDATE EMAIL
    if(!validator.isEmail(email)){
      return res.
      status(400).
      json({   
        success: false,
        msg: "Invalid Email Format. Please enter a valid email address.",})
    }
    // finding user QUERY
     const FindUserByEmail=await UserModel.findOne({email})
    //  if not find REGISTERED
     if(!FindUserByEmail){
      return res
      .status(404)
      .json({
        success:false,
        msg:"Invalid Credientials"
      })
     }
   if(FindUserByEmail){
    res.status(201)
    .json({success:true,"Reset_Link":"Link will be in your email","MSG":`Reset Link is sended to ${email}`})
   }
  }
  catch(err){
    console.log(err)
    res.json({"ERRORS":err})
  }
}
/*
 * get all users
 * type-admin
 */
const getAllUser = async (req, res, next) => {
  try {
    const AllUsers = await UserModel.find()
    res
      .status(200)
      .json({
        success: true,
        AllUsers
      })
  } catch (error) {
    console.log(error)
  }
}
/**
  get single user
  -- type :user
    --is authentication required:true
    //description this controller is basically for like user know about his details or his account
    like /me
  */
const GetUsersDetails = async (req, res, next) => {
  const user = await UserModel.findById(req.user.id)
  res
    .status(200)
    .json({
      success: true,
      user
    })
}

/**
 * get a single user
 * type-admin
 */
/**
 * update users role
 * 
 */
/**
 * delete user -admin
 * type -admin
 */
module.exports = { registerUser, loginUser, Userlogout,ForgotPassword, getAllUser, GetUsersDetails };
