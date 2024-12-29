const Product = require("../../models/ProductSchema");

const CountProduct = async (req, res) => {
    try {
        const Count = await Product.countDocuments({})
        res.status(200).json({
            success: true,
            data: Count
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = CountProduct