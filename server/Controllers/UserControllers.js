const UserModel = require("../models/UserModel");
// User Controller.
const { registerUser } = require("./UserController/Register");
const { loginUser } = require("./UserController/Login");
const { Userlogout } = require("./UserController/Logout");
const { ForgotPassword } = require("./UserController/ForgotPassword");
//Admin Controller
const { getAllUser } = require("./UserController/AllUsers.admin");


module.exports = { registerUser, loginUser, Userlogout, ForgotPassword, getAllUser };
