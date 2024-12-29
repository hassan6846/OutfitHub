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
    },
    PaymentMethod:{
        type:String,
        required:true
    },
    PaymentResult:{
        id:{
            type:String
        },
        status:{
            type:String
        },
        update_time:{
            type:String
        },
        email_address:{
            type:String
        }
    }   
    ,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

},{timestamps:true})


module.exports = mongoose.model('Payment', paymentSchema)

