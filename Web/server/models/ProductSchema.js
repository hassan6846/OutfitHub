const mongoose = require("mongoose");

// Schema for a single sub product
const SubCategorySchema = new mongoose.Schema({
  // Name of a product
  ProductName: {
    type: String,
    required: true
  },
  // Description of the product
  Description: String,
  Price: {
    OrignalPrice: Number,
    SalePrice: Number
  },
  Reviews: {
    Stars: {
      type: Number,
      default: 0,
      max: 5,
      min: 1
    }
  },
  // Setting if the product is trending on the homepage
  isTrendingHomePage: {
    type: Number,
    default: 0
  },
  // How many users liked a single product
  Likes: {
    type: Number,
    default: 0
  },
  ProductImages: {
    CoverImages: [String],
    OtherImages: [String]
  }
});

// Define the main Category
const ProductSchema = new mongoose.Schema({
  ParentCategory: {
    // Name of all the Parent Categories e.g., male, female, etc.
    CategoryName: {
      type: String,
      required: true
    },
    SubCategory: [SubCategorySchema]
  }
});

// Add a method to add a subcategory to the existing product
ProductSchema.methods.addSubCategory = function (subCategory) {
  this.ParentCategory.SubCategory.push(subCategory);
  return this.save();
};

// Export the Product model
module.exports = mongoose.model("Product", ProductSchema);
