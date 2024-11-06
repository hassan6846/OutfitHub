const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true
  },
  brand: {
    type: String,
    required: false,
    default: undefined
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"]
  },
  image: {
    type: [String],
    required: [true, "Kindly Add Some Images to Preview (minimum limit is 3)"],

  },
  category: {
    type: String,
    required: [true, "Please Enter Category"],
    default: "uncategorized"
  },
  subcategory: {
    type: String,
    required: [true, "Please enter SubCategory"],
    default: "undefined"
  },
  tags: {
    type: [String],
    required: true
  },
  likes: {
    type: Number,
    required: false,
    default:0
  },

  postedAt: {
    type: Date,
    default: Date.now()
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  PostedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  RegularPrice: {
    type:String,
    required:true,
  },
  Quantitiy:{
    type:String,
    required:true,
  },
  SalePrice: {
    type:String,
    required:true,
  },
  Unit: {
    type:String,
    default:"piece",

  },
  kgWeight: {
    default:"undefined",
    type: String,
  },
  Dimensions: {
    default:"0x0x0",
    type: String
  },
  Status: {
    type:String,
    default:"instock",
  
  },
  Promotion: {
    type:String,
    default:"newarrival",

  }
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product