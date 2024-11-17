const express=require("express")
const router=express.Router()


const CreateOrder = require("../Controllers/Order/CreateOrder");

router.route('/order/new').post(CreateOrder)

module.exports=router