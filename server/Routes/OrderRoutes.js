const express=require("express");
const { route } = require("./UserRoutes");
const router=express.Router()
//controllers
//middlewares

//user can create new order
router.route("/order/new").post()
router.route("/order/:id").get()
router.route("/orders/me").get()


/**
 * add admin routes below
 */
// this could fetch all orders
router.route("/admin/orders").get()
//this would update or delete orders
router
.route("/admin/order/:id")
.put()
.delete()
