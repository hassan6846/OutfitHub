const express = require("express")
const Product = require("../models/ProductSchema")
const cloudinary = require("cloudinary")

/**
 * 
 * create product Admin
 */
/**
 * Images At Least 1 Or 2
 * Description.
 * Title
 * Brand Name
 * Regular Price
 * Sale Price
 * Category
 * SubCategory
 * Status
 * Promotions
 * Quanitity
 *Units 
 *Weight in Kgs.
  Tags 
  Dimensions
 */
const CreateProduct = async (req, res, next) => {
    let images = [];
    //if the user had uploaded or added a single more url of images then he will push to array

    if (typeof req.body.images === "string") {
        images.push(req.body.images)
    }
    //if he added entiere array then The array would be the new Images array
    else {
        images = req.body.images
    }
    const imagesLinks = [];
    for (leti = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "ProductsFolder"
        })
    }
    imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
    })

    req.body.images = imagesLinks;
    req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
}