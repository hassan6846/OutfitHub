const UserModel = require("../models/UserModel");
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
  const page = Number(req.query.page) || 1;
  const limit = 8;
  const skip = (page - 1) * limit;

  try {
    const totalUsers = await UserModel.countDocuments(); // Get the total number of users.

    const AllUsers = await UserModel.find()
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      Pagination: {
        total: totalUsers,
        page,
        limit,
        users: AllUsers,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};


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
