


const getDataUri = require("../../middlewares/DataUri");
const upload = require("../../middlewares/multer");
const Product = require("../../models/ProductSchema");
const cloudinaryInstance = require("../../utils/Cloudinary");

const CreateProduct = async (req, res) => {
 
    try {
        const file = req.file;
        const fileUri=getDataUri(file)

        console.log(fileUri)
        
   
        return res.status(200).json({ success: true, message: "Product created successfully!" });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};

module.exports = CreateProduct;
