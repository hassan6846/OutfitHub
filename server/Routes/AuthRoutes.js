const express=require("express")
const router=express.Router()
//controllers
const  Register  = require("../Controllers/Auth/Register");

//Routes
router.route('/register').post(Register)


module.exports=router