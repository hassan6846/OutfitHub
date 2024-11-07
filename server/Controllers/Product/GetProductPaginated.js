const Product = require("../../models/ProductSchema");

const GetPaginatedProduct = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 5; // Default limit to 5 if not provided
        const skip = (page - 1) * limit;

        const products = await Product.find({})
            .skip(skip)
            .limit(limit);

        const totalProducts = await Product.countDocuments(); // Get total count of products
        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({
            success: true,
            data: products,
            pagination: {
                totalProducts,
                totalPages,
                currentPage: page,
                pageSize: limit
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
};

module.exports = { GetPaginatedProduct };
