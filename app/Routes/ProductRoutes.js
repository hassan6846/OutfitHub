const express = require('express')
const QueryProduct = require('../Controllers/Product/QueryProduct')
const GetTrendingProducts = require('../Controllers/Product/GetTrendingProducts')
const { GetPaginatedProduct } = require('../Controllers/Product/GetProductPaginated')
const GetSingleProduct = require('../Controllers/Product/GetSingleProduct')
const { getByTag } = require('../Controllers/Product/GetbyTags')

const router = express.Router()
//controllers



router.route('/products').get(GetPaginatedProduct)
router.route('/products/:query').get(QueryProduct)
router.route("/products/tags/:tag").get(getByTag)
router.route('/product/:id').get(GetSingleProduct)
router.route('/products/promotions/trending').get(GetTrendingProducts)
module.exports = router