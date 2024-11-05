





//models
const Product = require("../../models/ProductSchema");
//utils
const cloudinary = require("../../utils/Cloudinary")

const CreateProduct = async (req, res) => {
    const { 
        title,
        brand,
        img1,
        img2,
        img3,
        img4,
        description,
        regprice,
        saleprice,
        category,
        subcategory,
        promotion,
        status,
        qty,
        unit,
        weight,
        dimensions,
        tags,

    } = req.body
    try {
        res.json({
            data: "Elo"
        })
    } catch (error) {

    }
};

module.exports = CreateProduct;
