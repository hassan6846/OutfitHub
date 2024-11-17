const express=require("express")
const router=express.Router()


const CreateOrder = require("../Controllers/Order/CreateOrder");
const GetUserOrders = require("../Controllers/Order/GetUserOrder");

router.route('/order/new').post(CreateOrder)
router.route('/order/user/:id').get(GetUserOrders)
module.exports=router