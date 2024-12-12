const mongoose=require('mongoose')
const Product = require('./ProductSchema')

//push cart to the account
//get cart item when user log out
//delete and update cart items  and changes will be updated on database..
const CartItemSchama=new mongoose.Schema({
    Product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required: true,
        default: 1,
    }

})
const CartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    items:{
        type:[CartItemSchama],
        default:[]
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})
const Cart= mongoose.model('Cart',CartSchema)
module.exports=Cart