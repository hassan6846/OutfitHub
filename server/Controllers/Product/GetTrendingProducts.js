const Product = require("../../models/ProductSchema");


const GetTrendingProducts = async (req, res, next) => {
    try {
        const product = await Product.find({ Promotion: "trending" })

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
module.exports = GetTrendingProducts