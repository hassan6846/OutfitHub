





//models
const Product = require("../../models/ProductSchema");
//utils
const cloudinaryInstance = require("../../utils/Cloudinary");

const CreateProduct = async (req, res) => {
    const file=req.file
    try {
   
    
        return res.status(200).json({ success: true, message: "Product created successfully!" ,file:file});
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};

module.exports = CreateProduct;
