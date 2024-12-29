const express = require('express')
const router = express.Router()

//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')
const GetUsers = require('../Controllers/Users/GetLatestUser')
const CreateProduct = require('../Controllers/Product/CreateProduct')
const AllProducts = require('../Controllers/Product/GetAll')
const DeleteProduct = require('../Controllers/Product/DeleteProduct')
const CountProduct = require('../Controllers/Stats/CountProduct')
const { getLast30DaysCreditUsage } = require('../Controllers/Stats/CreditUsage')
const totalUploads = require('../Controllers/Stats/TotalUploads')w
const GetAllOrders = require('../Controllers/Order/GetAllOrder')
//middlewares

const { isAuthorized, isAuthenticated } = require('../middlewares/Auth')

//routes
router.route('/admin/user-count').get(isAuthenticated, isAuthorized("admin"), CountUser)
router.route('/admin/product-count').get(isAuthenticated, isAuthorized("admin"), CountProduct)
router.route('/admin/cloduinary/usage').get(isAuthenticated, isAuthorized("admin"), getLast30DaysCreditUsage)
router.route('/admin/get-users').get(isAuthenticated, isAuthorized("admin"), GetUsers)
router.route('/admin/product/upload').post(isAuthenticated, isAuthorized("admin"), CreateProduct)
router.route('/admin/orders').get(isAuthenticated, isAuthorized("admin"), GetAllOrders)
router.route('/admin/product/all').get(isAuthenticated,isAuthorized("admin"), AllProducts) //get all products
router.route('/admin/product/delete/:id').post(isAuthenticated, isAuthorized("admin"), DeleteProduct)
router.route('/admin/cloudinary/total-uploads').get(isAuthenticated, isAuthorized("admin"), totalUploads)

module.exports = router