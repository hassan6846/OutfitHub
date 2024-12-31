const Order = require("../../models/OrderModel");
const User = require("../../models/UserModel");
const mongoose = require("mongoose");

const CreateOrder = async (req, res, next) => {
    const { address, city, phone, total, method, product, id } = req.body;
   
    // Log the ID to verify it's being passed correctly
    console.log("User ID:", id);

    if (!address || !city || !phone || !total || !product || !id) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Validate the 'id' to be a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID",
        });
    }

    // Check if the user exists
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    try {
        const createorder = new Order({
            orderedBy: id,  // Ensure that this is a valid ObjectId
            shippingInfo: {
                address: address,
                city: city,
                phoneNo: phone,
            },
            TotalAmount: total,
            products: product,
            PaymentMethod: method,
        });

        await createorder.save();

        res.status(200).json({
            success: true,
            message: "Order Created Successfully. View it in your profile.",
        });
    } catch (error) {
        console.error("Order creation error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = CreateOrder;
