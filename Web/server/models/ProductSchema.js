const mongoose=require("mongoose");

const ProductSchema= new mongoose.Schema({
  //name Or title of the product
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  // description of the product could be long or html vice versa
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  // price of the product
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  beforePrice:{
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  }
  // 
  
})