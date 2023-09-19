const UserModel = require("../models/UserModel");
const validator = require("validator");
// Controllers.
const { registerUser } = require("./UserController/Register");
const { loginUser } = require("./UserController/Login");
const { Userlogout } = require("./UserController/Logout");
const { ForgotPassword } = require("./UserController/ForgotPassword");


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
module.exports = { registerUser, loginUser, Userlogout, ForgotPassword, getAllUser, GetUsersDetails };
