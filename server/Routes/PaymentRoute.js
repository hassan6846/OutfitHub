const express=require("express")
const router=express.Router()

//controllers
const CreatePayment = require("../Controllers/Payment/CreatePayment")
const { isAuthenticated } = require("../middlewares/Auth")

//routes
router.route("/payment/create").post(isAuthenticated , CreatePayment)

module.exports=router