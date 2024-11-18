const express = require("express")
const router = express.Router()


const CreateOrder = require("../Controllers/Order/CreateOrder");
const GetUserOrders = require("../Controllers/Order/GetUserOrder");

const { isAuthenticated } = require("../middlewares/Auth")

router.route('/order/new').post(isAuthenticated, CreateOrder)
router.route('/order/user/:id').get(isAuthenticated, GetUserOrders)
module.exports = router