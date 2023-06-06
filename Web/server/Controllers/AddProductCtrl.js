const Product = require("../models/ProductSchema");
const express = require('express')
const app = express()

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error
    });
  }
};


module.exports = {
  addProduct,

};
