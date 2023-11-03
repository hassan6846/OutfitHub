const ProductSchema = require("../models/ProductSchema");
const Product = require("../models/ProductSchema");
const User = require("../models/UserModel");
const { cloudinary } = require("../utils/Cloudinary");

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      ratings,
      beforePrice,
      istrending,
      category,
      Stock,
      numOfReviews,
      user, } = req.body;

    // If you are handling image upload elsewhere and passing an empty array for images:
    const Images = ["https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 'https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];

    // Create the new product
    const product = await Product.create({
      name,
      images: Images,
      description,
      price,
      beforePrice,
      ratings,
      istrending,
      category,
      Stock,
      numOfReviews,

    });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// fetch All Trending Products..

const FetchTrendingProducts = async (req, res, next) => {
  try {
    const FindTrending = await Product.find({ istrending: true })
    // response
    res.status(201)
    .json({
      success: true,
      data:FindTrending
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

module.exports = {
  createProduct,FetchTrendingProducts
};


