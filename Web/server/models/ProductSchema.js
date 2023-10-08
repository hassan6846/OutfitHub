const mongoose = require("mongoose");
const User = require("./UserModel")
const ProductSchema = new mongoose.Schema({
  //name Or title of the product
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  Images: {
    type: String,
    required: [true, "Kindly Add Some Images to Preview lowest limit is 3 "],
    minLength: [3, "Price cannot exceed 8 characters"],
    maxLength: [9, "Image limits Exceds."]
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
  beforePrice: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  Category: {
    type: String,
    required: [true, "Please Enter Category"],
    default: "undefined",
    Subcategoy: {
      type: String,
      default: "undefined",
      required: [true, "Please enter SubCategory"],
    },
    Stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    IsTrending: {
      default: false
    },
    Tags: {
      required: [true, "kindly Enter Tags it Helps to Filter"],
      maxlength: [20, "Please dont add too much Tags"],
      minlength: [2, "please Enter Few Tags this Helps to filteration"]
    },
    // user reviews
    Review: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      }],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // 

})
module.exports = mongoose.model("Product", ProductSchema);
