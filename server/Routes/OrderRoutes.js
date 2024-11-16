const express=require("express")
const router=express.Router()

const { isAuthenticated,isAuthorized } = require("../middlewares/Auth");

const CreateOrder = require("../Controllers/Order/CreateOrder");

router.route('/order/new').post(isAuthenticated,CreateOrder)

module.exports=router