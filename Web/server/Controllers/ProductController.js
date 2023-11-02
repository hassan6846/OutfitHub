const Product = require("../models/ProductSchema");
const { cloudinary } = require("../utils/Cloudinary");

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      ratings,
      category,
      Stock,
      numOfReviews,
      user,
    } = req.body;

    // If you are handling image upload elsewhere and passing an empty array for images:
    const images = [];

    // Create the new product
    const product = await Product.create({
      name,
      description,
      price,
      ratings,
      images,
      category,
      Stock,
      numOfReviews,
      user,
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


