const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Importing the uuid package
const User = require('./UserModel');

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
            required: false,
        },
        pinCode: {
            type: Number,
            default: 54000,
        },
        phoneNo: {
            type: String,
            required: true,
        },
    },
    products: [{
        type: Object,
        required: true,
    }],
    orderedBy: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
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
        enum: ["CreditCard", "CashOnDelivery"],
        required: true,
    },
    orderState: {
        type: Boolean,
        default: false, // false if shipped
    },

    TotalAmount: {
        type: Number,
        required: true,
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
