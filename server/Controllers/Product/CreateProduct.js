const Product = require("../../models/ProductSchema");
const cloudinary = require("../../utils/Cloudinary");

const CreateProduct = async (req, res) => {
    const {
        id,
        title,
        brand,
        img1,
        img2,
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
    } = req.body;

    // Check for missing required fields
    if (!id || !title || !brand || !img1 || !img2 || !description || !regprice || !saleprice || !category || !subcategory || !promotion || !status || !qty || !unit || !weight || !dimensions) {
        return res.status(400).json({
            success: false,
            msg: "Please fill all required fields",
        });
    }

    // Helper function to convert base64 to data URI format
    const base64ToDataURI = (base64String) => {
        const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        return `data:image/jpeg;base64,${buffer.toString('base64')}`;
    };

    // Upload images to Cloudinary using upload_stream
    const uploadImageToCloudinary = async (base64String) => {
        const dataURI = base64ToDataURI(base64String);
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(dataURI, {
                folder: 'Ecommerce/products',
                categorization: "imagga_tagging",
                auto_tagging: 0.4, // Ensure Cloudinary attempts to auto-tag the image
                resource_type: "auto",
            }, (error, result) => {
                if (error) {
                    console.error("Error uploading image:", error);
                    reject(error);
                } else {
                    // Check if tags are present and valid
                    if (result.tags && result.tags.length > 0) {
                        resolve({
                            url: result.secure_url,
                            tags: result.tags,  // Tags from Cloudinary
                        });
                    } else {
                        resolve({
                            url: result.secure_url,
                            tags: []  // Empty array if no tags
                        });
                    }
                }
            });
        });
    };

    try {
        // Track tags from all images
        const imagesData = await Promise.all([img1, img2].map(uploadImageToCloudinary));
        
        // Extract URLs and tags for each image
        const imageUrls = imagesData.map(data => data.url);
        const tagsFromCloudinary = imagesData.flatMap(data => data.tags); // Combine tags from both images

        // Create the product with the tags collected
        const newProduct = new Product({
            name: title,
            brand: brand,
            description: description,
            image: imageUrls,
            category: category,
            subcategory: subcategory,
            tags: tagsFromCloudinary,  // Tags from Cloudinary
            PostedBy: id,
            RegularPrice: regprice,
            Quantitiy: qty,
            SalePrice: saleprice,
            Unit: unit,
            kgWeight: weight,
            Dimensions: dimensions,
            Status: status,
            Promotion: promotion,
            postedAt: Date.now() // Ensure timestamp is included
        });

        // Save the new product to the database
        await newProduct.save();

        // Send success response
        res.status(200).json({
            success: true,
            msg: "Product created successfully",
            product: newProduct
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error please check your internet",
        });
    }
};

module.exports = CreateProduct;
