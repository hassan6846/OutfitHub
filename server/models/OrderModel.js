const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Importing the uuid package


// Schema Model
const OrderSchema = new mongoose.Schema({
    OrderId: {
        type: String,
        default: () => uuidv4(), // Using uuid to generate a unique OrderId
    },
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            default: "Lahore",
        },
        state: {
            type: String,
            default: "Punjab",
        },
        country: {
            type: String,
            default: "Pakistan",
        },
        pinCode: {
            type: Number,
            default: 54000,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }, // Could be SalePrice or RegularPrice
    }],
    orderedBy: {
        type: String, // Assuming this is a reference to a user's ID
        required: true,
    },
    orderedAt: {
        type: Date,
        default: Date.now(),
    },
    orderStatus: {
        type: String,
        enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
        default: "Pending",
    },
    PaymentMethod: {
        type: String,
        enum: ["CreditCard",  "CashOnDelivery"],
        required: true,
    },
    orderState: {
        type: Boolean,
        default: false, // false if shipped
    },

    OrderAmount:{
        type: Number,
        required: true,
    },
    TotalAmount: {
        type: Number,
        required: true,
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
