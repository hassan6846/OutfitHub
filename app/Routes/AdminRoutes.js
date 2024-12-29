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
const totalUploads = require('../Controllers/Stats/TotalUploads')
const GetAllOrders = require('../Controllers/Order/GetAllOrder')
//middlewares

const { isAuthorized, isAuthenticated } = require('../middlewares/Auth')

//routes
router.route('/admin/user-count').get(isAuthenticated, isAuthorized, CountUser)
router.route('/admin/product-count').get(isAuthenticated, isAuthorized, CountProduct)
router.route('/admin/cloduinary/usage').get(isAuthenticated, isAuthorized, getLast30DaysCreditUsage)
router.route('/admin/get-users').get(isAuthenticated, isAuthorized, GetUsers)
router.route('/admin/product/upload').post(isAuthenticated, isAuthorized, CreateProduct)
router.route('/admin/orders').get(isAuthenticated, isAuthorized, GetAllOrders)
router.route('/admin/product/all').get(isAuthenticated,isAuthorized("admin"), AllProducts) //get all products
router.route('/admin/product/delete/:id').post(isAuthenticated, isAuthorized, DeleteProduct)
router.route('/admin/cloudinary/total-uploads').get(isAuthenticated, isAuthorized, totalUploads)

module.exports = router