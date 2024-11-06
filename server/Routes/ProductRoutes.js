const express = require('express')
const QueryProduct = require('../Controllers/Product/QueryProduct')
const GetTrendingProducts = require('../Controllers/Product/GetTrendingProducts')
const router = express.Router()
//controllers



router.route('/products/:query').get(QueryProduct)
router.route('/products/promotions/trending').get(GetTrendingProducts)
module.exports = router