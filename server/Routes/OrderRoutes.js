const express=require("express")
const router=express.Router()
//middlewares
const { isAuthenticated,isAuthorized } = require("../middlewares/Auth");
//controller
const CreateOrder = require("../Controllers/Order/CreateOrder");

router.route('/order/new').post(isAuthenticated,CreateOrder)

module.exports=router