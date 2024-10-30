const Product = require("../../models/ProductSchema");
const cloudinaryInstance = require("../../utils/Cloudinary"); // Import your Cloudinary instance

const CreateProduct = async (req, res) => {
    const { name, brand, description, category, subcategory, PostedBy, tags, RegularPrice, SalePrice, Unit, kgWeight, Dimensions, Status, Promotion } = req.body;
    const files = req.files; // Using multer to get the files

    try {
        if (!files || files.length < 3) {
            return res.status(400).json({ success: false, message: "Please upload between 3 and 9 images." });
        }

        // Upload each file to Cloudinary
        const uploadPromises = files.map(file => 
            cloudinaryInstance.uploader.upload(file.path, { // Use the imported Cloudinary instance
                folder: "products",
                resource_type: "image"
            })
        );

        const uploadResults = await Promise.all(uploadPromises);
        const imageUrls = uploadResults.map(result => result.secure_url);

        // Create the product
        const product = new Product({
            name,
            brand,
            description,
            image: imageUrls,
            category,
            subcategory,
            PostedBy,
            tags,
            RegularPrice,
            SalePrice,
            Unit,
            kgWeight,
            Dimensions,
            Status,
            Promotion,
            isAvailable: true,
        });

        await product.save();
        return res.status(201).json({ success: true, message: "Product created successfully!", data: product });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = CreateProduct;
