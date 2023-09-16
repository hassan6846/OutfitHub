const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const ErrorHandler = require("../utils/errorhandler");
const router = require("../Routes/UserRoutes");
const { isAuthenticated } = require("../middlewares/Auth");

/**
 * 
 * REGISTER 
 * 
 * 
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
    const token = generateToken(savedUser._id,savedUser.email);
    res.status(201)
    .cookie("AccessToken",token,{
      httpOnly:true,
      path:"/",
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

// Generate token
const generateToken = (payload) => {
  return jwt.sign({ payload  }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

/**
 * LOGIN CONTROLLER
 * 
 *
 */
const loginUser = async (req, res) => {
  // Getting email and password
  const { email, password } = req.body;
  // If email or password is missing
  if (!(email || password)) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all required fields",
    });
  }
  try {
    // Find user by email
    const findUser = await UserModel.findOne({ email });
    const SALT_ROUNDS = 10
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
   if(findUser){
   await bcrypt.compare(password,hash,async function(err,result1){
      if(result1){
        res.status(201)
        .json({
          success:true,
          "type":"Login",
          "Msg":"User Logged in Sucessfully",
          token:generateToken(findUser._id)
        })
       
      }
    })
   }
   else{
    res.status(404).json({
     success:true,
     "Msg":"Invaild Credentials."
    })}
  } catch (error) {
    return res
    .status(500)
    .json({
      success: false,
      msg: "Internal server error",
      error: error.message,
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
  return
  next(new ErrorHandler("User doesn't exists",404))
}
 } catch(error){
  res.send(error)
  console.log(error)
 }
}

/**
 * get all users
 * type-admin
 * 
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
