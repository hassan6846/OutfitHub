const Order = require("../../models/OrderModel");
const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken")

const CreateOrder = async (req, res, next) => {
    const { orderamount, address, city, phone, total ,method} = req.body

if (!orderamount || !address || !city || !phone || !total) {
        res.status(400).json({
            success: false,
            message: "All fields are  required",
            decoded
        })
    }
    try {
        const decoded=await jwt.decode(token)
        const createorder = new Order({
            OrderAmount: orderamount,
            orderedBy: decoded.id,
            shippingInfo: {
                address: address,
                city: city,
                phoneNo: phone

            },
            TotalAmount: total,
            PaymentMethod:method

        })
        await createorder.save()
        
      
        res.status(200).json({
            success: true,
            messsage: "Order Created Sucessfully View in your profile ",
      
        })
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = CreateOrder