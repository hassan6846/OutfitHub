const express=require("express");
const Router=express.Router();
 
router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );
router.get('/getme', isAuthenticated,  userProfile );
router.get('/user/:id', singleUser );