const express = require('express')
const QueryProduct = require('../Controllers/Product/QueryProduct')
const GetTrendingProducts = require('../Controllers/Product/GetTrendingProducts')
const { GetPaginatedProduct } = require('../Controllers/Product/GetProductPaginated')
const router = express.Router()
//controllers


router.route('/products').get(GetPaginatedProduct)
router.route('/products/:query').get(QueryProduct)
router.route('/products/promotions/trending').get(GetTrendingProducts)
module.exports = router