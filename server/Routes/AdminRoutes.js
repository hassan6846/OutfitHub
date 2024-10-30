const express=require('express')
const router=express.Router()


//all controller being accessible by admin only
const CountUser = require('../Controllers/Users/NoUsers')
const GetUsers = require('../Controllers/Users/GetLatestUser')
//routes
router.route('/admin/user-count').get(CountUser) //sends the number of registed users on the app.
router.route('/admin/get-users').get(GetUsers)
module.exports=router