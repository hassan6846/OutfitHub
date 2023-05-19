const express=require("express");
const Router=express.Router();
//  routers has controllers in mvc framework
// controllers 

router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );
