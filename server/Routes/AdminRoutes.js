const express=require('express')
const router=express.Router()

//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')
const GetUsers = require('../Controllers/Users/GetLatestUser')
const CreateProduct = require('../Controllers/Product/CreateProduct')
const AllProducts = require('../Controllers/Product/GetAll')
const upload = require('../middlewares/multer')
//middlewares

//routes
router.route('/admin/user-count').get(CountUser) //sends the number of registed users on the app.
router.route('/admin/get-users').get(GetUsers)
router.route('/admin/product/upload').post(upload.single('image'),CreateProduct)
router.route('/admin/product/all').get(AllProducts)//get all products
module.exports=router