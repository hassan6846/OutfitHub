const express = require("express");
const { createProduct } = require("../Controllers/ProductController");
const router = express.Router();

// middleware

//controllers
//neeeded a admin sidebar with different routes 

/**
 * type:User
 * Path:host:/product
 * Description:For fetch all products
 * Auth Required:False
 * 
 */
router.route("/products").get()
router.route("/product/:id").get()
router.route("/product/trending").get()

/**
 *Admin Routes 
 */
router.route("/admin/products").get()
// create a new product
router.route("/admin/products/new").post(createProduct)
router.route("/admin/product/:id").get()
module.exports = router