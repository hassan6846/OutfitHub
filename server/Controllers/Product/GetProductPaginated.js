const Product = require("../../models/ProductSchema");

const GetPaginatedProduct = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const category = req.query.category;
        const subcategory = req.query.subcategory;
        const lowtohigh = req.query.lowtohigh === 'true';

        const filter = {};


        if (category) {
            filter.category = { $regex: new RegExp(`^${category}$`, 'i') };

            if (subcategory) {
      
                filter.subcategory = { $regex: new RegExp(`^${subcategory}$`, 'i') };
            }
        }

        const sort = lowtohigh ? { SalePrice: 1 } : { SalePrice: -1 };

        const products = await Product.find(filter)
            .skip(skip)
            .limit(limit)
            .sort(sort);

        const totalProducts = await Product.countDocuments(filter);
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
