const express=require("express")
const router=express.Router()
//controllers
const  Register  = require("../Controllers/Auth/Register");
const Login=require("../Controllers/Auth/Login");
const Logout = require("../Controllers/Auth/Logout");

//middlewares
const LoginRequestLimits = require("../utils/RateLimit");
const { isAuthenticated } = require("../middlewares/Auth");
//Routes
router.route('/register').post(LoginRequestLimits,Register)
router.route('/login').post(LoginRequestLimits,Login)
router.route('/logout').post(isAuthenticated,Logout)
module.exports=router