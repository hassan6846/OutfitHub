const ProductModel = require("../models/ProductModel");
const Product = require("../models/ProductModel");
const  mongoose=require("mongoose")
// create Product Controller
exports.CreateProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};



