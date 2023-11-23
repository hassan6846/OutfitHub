const express = require("express");
const { createProduct,FetchTrendingProducts,FilterTags} = require("../Controllers/ProductController");
const router = express.Router();
const {isAuthenticated,authorizeRoles} =require("../middlewares/Auth")
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
router.route("/product/trending").get(FetchTrendingProducts)
router.route("/product/tags/:tag").get(FilterTags)
router.route("/product/:id").get()


/**
 *Admin Routes 
 */
router.route("/admin/products").get(isAuthenticated,authorizeRoles('admin'))
// create a new product
router.route("/admin/products/new").post(isAuthenticated,authorizeRoles('admin'),createProduct)
router.route("/admin/product/:id").get()
module.exports = router