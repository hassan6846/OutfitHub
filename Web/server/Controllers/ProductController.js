// all controllers
/**
 * create and upload a new product --admin
 * --get all products
 * --update products state after purchase 
 * --delete entiere product
 * getproductDetails
 * --create Product Review by User
 * --Delete Users Review
 * GetAdmin products
 */
const Product = require("../models/ProductSchema");

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

module.exports = {
  createProduct,
};


