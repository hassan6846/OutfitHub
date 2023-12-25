const ProductSchema = require("../models/ProductSchema");
const Product = require("../models/ProductSchema");
const User = require("../models/UserModel");
require('dotenv').config();
const { cloudinary } = require("../utils/Cloudinary");



// Controller function to create a new product
const createProduct = async (req, res,next) => {

 



}
// fetch All Trending Products..

const FetchTrendingProducts = async (req, res, next) => {
  try {
    const FindTrending = await Product.find({ istrending: true })
    // response
    res.status(201)
      .json({
        success: true,
        data: FindTrending
      })
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        Msg: error
      })
    console.log(error)
  }
  next()
}
// Create Tag Component...
const FilterTags = async (req, res, next) => {
  const tag = req.params.tag
  console.log(tag)
  try {
    const FindByTags = await Product.find({
    tags:{$all:tag}
    })
    // Response
    res.status(201).json({
      success:true,
      data:FindByTags
    })
  } catch (error) {

     console.log(error)
    // sending Error
      res.status(500).json({
        success: false,
        msg: error
      })
    
  }
  next()
}
module.exports = {
  createProduct, FetchTrendingProducts, FilterTags
};


