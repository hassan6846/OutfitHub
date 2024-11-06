const express=require('express')
const  QueryProduct = require('../Controllers/Product/QueryProduct')
const router=express.Router()
//controllers


router.route('/products/:query').get(QueryProduct)
module.exports=router