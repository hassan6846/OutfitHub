const Order = require("../../models/OrderModel");
const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken")

const CreateOrder = async (req, res, next) => {
    const { orderamount, id, address, city, phone, total } = req.body
    const token = req.cookies.token

    //required fields.
    if (!token) {
        res.status(401).json({
            success: false,
            message: "Unautherized"
        })
    } if (!orderamount || !id || !address || !city || !phone || !total) {
        res.status(400).json({
            success: false,
            message: "All fields are  required",
            decoded
        })
    }
    try {
        const createorder = new Order({
            OrderAmount: orderamount,
            orderedBy: id,
            shippingInfo: {
                address: address,
                city: city,
                phone: phone

            },
            TotalAmount: total

        })
        await createorder.save()
        //decode token test
      
        res.status(200).json({
            success: true,
            messsage: "Order Created Sucessfully View in your profile pic",
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