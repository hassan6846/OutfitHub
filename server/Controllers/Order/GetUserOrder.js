const Order = require("../../models/OrderModel");

const GetUserOrders = async (req, res, next) => {
    const { id } = req.params
    try {
        const orders = await Order.find({ orderedBy: id })
        if(!orders){
            res.status(400).json({
                success: false,
                message:"🖐 🖕 Stop Fukin with da server dmbasss"
            })
        }
        res.status(200).json({
            success: true,
            orders
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message:"🖕 Stop Fukin with da server dmbasss"
        })
        console.log("error")
    }
};
module.exports = GetUserOrders