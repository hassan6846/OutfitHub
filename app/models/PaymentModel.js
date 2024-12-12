const { default: mongoose } = require("mongoose");
const Order = require("./OrderModel");

//Payment Schema
const paymentSchema = new mongoose.Schema({
    OrderId: {
        type: mongoose.Schema.ObjectId,
        ref: "Order"
    },
    PaidAt:{
        default:Date.now,
        required:false
    }
})


module.exports = mongoose.model('Payment', paymentSchema)

