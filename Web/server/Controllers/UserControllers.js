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
        msg: "Email is already registered",
      });
    }

    // Hash the password


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
        exp: Math.floor(Date.now() / 1000) + 7200
      }, process.env.JWT_SECRET);
    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        path: "/",
        httpOnly: true,
        secure: true,
        expiresIn: new Date(Date.now() * 24 * 60 * 1000)
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
    // MATCH HASH
    const isPasswordMatched = await FindUser.comparePassword(password)
    if (!isPasswordMatched) {
      return res.status(400).json({
        "MSG": "PASSWORD didn't matched"
      })
    }
    if (isPasswordMatched) {
      res.status(200).json({
        msg: "HELLO FROM INSIDE"
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
  res.cookie('token', null, {
    expires: new Date(Date.now()), // Add 12000 milliseconds (12 seconds) to the current time
    httpOnly: true,
    secure: true
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

const ForgotPassword = async (req, res, next) => {
  try {
    //find email exists or not
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
      res.status(400).json({
        "Success": false,
        "MSG": "Incorrect Email or User doesn't exists"
      })
    }
  } catch (error) {
    res.send(error)
    console.log(error)
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
module.exports = { registerUser, loginUser, Userlogout, getAllUser, GetUsersDetails };
