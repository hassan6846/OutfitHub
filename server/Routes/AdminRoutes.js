const express = require('express')
const router = express.Router()

//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')
const GetUsers = require('../Controllers/Users/GetLatestUser')
const CreateProduct = require('../Controllers/Product/CreateProduct')
const AllProducts = require('../Controllers/Product/GetAll')
const DeleteProduct = require('../Controllers/Product/DeleteProduct')


//middlewares

const { isAuthenticated, isAuthorized } = require('../middlewares/Auth')
//routes
router.route('/admin/user-count').get(isAuthenticated, isAuthorized("admin"), CountUser);
router.route('/admin/get-users').get(isAuthenticated, isAuthorized("admin"), GetUsers)
router.route('/admin/product/upload').post(isAuthenticated, isAuthorized("admin"), CreateProduct)
router.route('/admin/product/all').get(isAuthenticated, isAuthorized("admin"), AllProducts)//get all products
router.route('/admin/product/delete/:id').post(isAuthenticated, isAuthorized("admin"), DeleteProduct)
module.exports = router