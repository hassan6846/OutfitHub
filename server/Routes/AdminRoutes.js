const express=require('express')
const router=express.Router()


//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')


//routes
router.route('/admin/user-count').get(CountUser) //sends the number of registed users on the app.
module.exports=router