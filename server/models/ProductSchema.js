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
    validate: {
      validator: function (array) {
        return array.length >= 1 && array.length <= 9;
      },
      message: "Image array should have between 3 and 9 items."
    }
  },
  category: {
    type: String,
    required: [true, "Please Enter Category"],
    default: "undefined"
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
  },

  postedAt: {
    type: Date,
    default: Date.now()
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  PostedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  RegularPrice: {

  },
  SalePrice: {

  },
  Unit: {
    enum: ['piece', 'boxes', 'kg', 'dozen', 'ounce']
  },
  kgWeight: {
    type: String,
  },
  Dimensions: {
    type: String
  },
  Status: {
    enum: ['instock', 'outofstock', 'ondemand', 'lowstock', 'unavailable']
  },
  Promotion: {
    enum: ['trending', 'bestseller', 'limited', 'newarrival']
  }
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product