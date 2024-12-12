const Product = require("../../models/ProductSchema");

// Get products by a single tag
const getByTag = async (req, res, next) => {
    try {
        // Extract the 'tag' parameter from req.params
        const tag = req.params.tag; 

        if (!tag) {
            return res.status(400).json({ message: "Tag parameter is required." });
        }

        // Find products where the 'tags' array contains the given tag
        const products = await Product.find({ tags: tag });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for the given tag." });
        }

        // Return the found products
        res.status(200).json({ products });
    } catch (error) {
        console.error("Error fetching products by tag:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getByTag };
