const express=require("express")
const router=express.Router()

//controllers
const CreatePayment = require("../Controllers/Payment/CreatePayment")

//routes
router.route("/payment/create").post(CreatePayment)

module.exports=router