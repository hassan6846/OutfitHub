const express=require("express");
const { CreateNewUser } = require("../Controllers/UserCtrl");
const router=express.Router();
/**
 *  https methods are below
 * router.put
router.get
router.delete
router.post
 * 
 * 
 */  
router.post("/signup",CreateNewUser);
module.exports=router;
