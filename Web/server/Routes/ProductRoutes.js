const express = require("express");
const router = expres.Router();

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


/**
 *Admin Routes 
 */
router.route("/admin/products")
.get()
router.route("/admin/products/new")
router.route("/admin/product/:id")
module.exports = router