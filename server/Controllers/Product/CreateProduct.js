const Product = require("../../models/ProductSchema")
const cloudinaryInstance = require("../../utils/Cloudinary")

const CreateProduct = async (req, res, next) => {
    const { images, name, brand, description, category, subcategory, PostedBy, tags, RegularPrice, SalePrice, Unit, kgWeight, Dimensions, Status, Promotion } = req.body

    try {
        //check if fields are typed are valid

    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}


module.exports = CreateProduct