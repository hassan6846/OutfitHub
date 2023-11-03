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
      category,
      Stock,
      numOfReviews,
      user,} = req.body;

    // If you are handling image upload elsewhere and passing an empty array for images:
    const Images = ["https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",'https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];

    // Create the new product
    const product = await Product.create({
      name,
      images:Images,
      description,
      price,
      beforePrice,
      ratings,

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



module.exports = {
  createProduct,
};


