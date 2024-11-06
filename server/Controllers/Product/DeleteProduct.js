const Product = require("../../models/ProductSchema");
const cloudinary = require('../../utils/Cloudinary')
//delete images from cloudinay
//delete documnent as well
const DeleteProduct = async (req, res, next) => {
    const id = req.params
    try {
        const findProduct = await Product.findOneAndDelete({ id })
        //delete product images from cloudinary

  
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
module.exports = DeleteProduct