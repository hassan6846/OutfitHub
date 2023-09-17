const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RequestLimits=require("express-rate-limit")
const UserModel = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const router = require("../Routes/UserRoutes");
const { isAuthenticated } = require("../middlewares/Auth");
const validator=require("validator")

/*
* REGISTER 
*/
  async function registerUser(req, res) {
  // Getting username, email, and password
  const { username, email, password } = req.body;
      // If any field is empty
     if (!(username || email || password)) {
    return res.status(400).json({
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
        msg: "Email is already registered",
      });
    }
  
    // Hash the password
    const SALT_ROUNDS = 10
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const user = new UserModel({
      username,
      email,
      password: hash,
    });

    // Save the user to the database
    const savedUser = await user.save();
  
    // Generate token for the user
    const token =jwt.sign({
      user_id:savedUser._id,
      name:savedUser.username,
      email:savedUser.email,
      role:savedUser.role,
      exp:Math.floor(Date.now()/1000)+7200
     
    },process.env.JWT_SECRET);
     res.status(201)
    .cookie("token",token,{
      httpOnly:true,
      path:"/",
      httpOnly: true,
      secure:true,
      expiresIn:new Date(Date.now()*24*60*1000)
    })
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
    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid email format kindly Enter Valid Email",
      });
    }
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "Invalid Credentials.",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // Generate and return a JWT for the authenticated user
      const Logintoken = jwt.sign({
        id:user._id,
        name:user.username,
        email:user.email,
        role:user.role,
        exp:Math.floor(Date.now()/1000)+7200
      },process.env.JWT_SECRET); // Implement this function to generate JWT
      res.status(201).json({
        success: true,
        type: "Login",
        msg: "User Logged in Successfully",
        token: Logintoken,
      });
    } else {
      res.status(401).json({
        success: false,
        msg: "Invalid Credentials.",
      });
    }
  } catch (error) {
    // Log the error for debugging and return a meaningful error response
    console.error("Login Error:", error);
    res.status(500).json({
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
  res.cookie('token', null, {
    expires: new Date(Date.now()), // Add 12000 milliseconds (12 seconds) to the current time
    httpOnly: true,
    secure:true
  });
  res.status(200).json({
    success: true,
    message: 'Logged Out',
  });
};
/**
 * forgot password 
 * method post
 * requires email only
 * type user
 */ 

const ForgotPassword=async (req,res,next)=>{
 try{
//find email exists or not
const user=await UserModel.findOne({email:req.body.email})
   if(!user){
   res.status(400).json({
     "Success":false,
     "MSG":"Incorrect Email or User doesn't exists"
})
}} catch(error){
  res.send(error)
  console.log(error)
 }}

/*
 * get all users
 * type-admin
 */
const getAllUser=async(req,res,next)=>{
  try{
    const AllUsers=await UserModel.find()
    res
    .status(200)
    .json({
      success:true,
      AllUsers
    })
  }catch(error){
    
    res.send(error)
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
 const GetUsersDetails=async(req,res,next)=>{
 const user=await UserModel.findById(req.user.id)
 res
 .status(200)
.json({
  success:true,
  user
})}
 
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
module.exports = { registerUser, loginUser,Userlogout,getAllUser,GetUsersDetails };
