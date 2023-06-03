const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name for the product."],
  },
  description: {
    type: String,
    required: [true, "Please enter a description for the product."],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price for the product."],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
