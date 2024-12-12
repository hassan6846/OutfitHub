const Product = require("../../models/ProductSchema");

const filterProducts = async (req, res, next) => {
  try {
    const {
      category,
      subcategory,
      brand,
      minPrice,
      maxPrice,
      sortByPrice, // query parameter for sorting (asc or desc)
    } = req.query;

    let filter = {};

    // Apply category, subcategory, and brand filters if they are provided
    if (category) {
      filter.category = category;
    }

    if (subcategory) {
      filter.subcategory = subcategory;
    }

    if (brand) {
      filter.brand = brand;
    }

    // Apply price range filter if minPrice and/or maxPrice are provided
    if (minPrice || maxPrice) {
      filter.RegularPrice = {};
      if (minPrice) filter.RegularPrice.$gte = Number(minPrice); // Greater than or equal to minPrice
      if (maxPrice) filter.RegularPrice.$lte = Number(maxPrice); // Less than or equal to maxPrice
    }

    // Sorting logic for price (default is low to high if not specified)
    let sort = {};
    if (sortByPrice) {
      if (sortByPrice === "asc") {
        sort.RegularPrice = 1; // ascending order
      } else if (sortByPrice === "desc") {
        sort.RegularPrice = -1; // descending order
      }
    } else {
      // Default sorting: Low to High if no sortByPrice is provided
      sort.RegularPrice = 1; // ascending by default
    }

    // Fetch the filtered and sorted products
    const products = await Product.find(filter).sort(sort);

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found matching the filters." });
    }

    // Return the filtered and sorted products
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { filterProducts };


// GET /products/filter?category=clothing&sortByPrice=asc
// GET /products/filter?category=clothing&subcategory=male&brand=nike&sortByPrice=desc
// GET /products/filter?minPrice=50&maxPrice=200&sortByPrice=asc
// GET /products/filter?category=electronics&minPrice=100&maxPrice=500&sortByPrice=desc
// GET /products/filter?category=clothing&subcategory=male&minPrice=20&maxPrice=100&sortByPrice=asc
// GET /products/filter?category=clothing&subcategory=male&brand=nike
