





//models
const Product = require("../../models/ProductSchema");
//utils
const cloudinaryInstance = require("../../utils/Cloudinary");

const CreateProduct = async (req, res) => {
  
    try {
    const file=req.file
   console.log(files)
        return res.status(200).json({ success: true, message: "Product created successfully!" });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};

module.exports = CreateProduct;
