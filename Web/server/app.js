const express=require("express")
const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/Commerce');
// dotenv for environmental variables
require("dotenv").config()
const app=express();
const port=3000;

//  routes to create
/* 
shop fetch all the  product 
/men
/women
/kids 
/beauty 
/girls
/ all  add some filteratiion here
*/
/* 

/user/liked  for liked products
*/
// listen
app.listen(port,function(req,res){
    console.log(process.env.MSG);
    console.log(`app is running on ${port}`)
})