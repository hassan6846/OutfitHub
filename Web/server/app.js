const express=require("express")
const bycrypt=require("bcrypt")
const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/Commerce');
// dotenv for environmental variables
require("dotenv").config()
const app=express();
const port=3000;
// const md5=require("md5")
// const hash=md5("gaynigga")
// console.log(hash)

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

const saltRounds=12;
const plainText="qwertyuiop";
const salt="&@#KKSLSMMML2";
bycrypt.hash(plainText,saltRounds,function(err,hash){
    console.log(hash)
})


// listen
app.listen(port,function(req,res){
    console.log(process.env.MSG);
    console.log(`app is running on ${port}`)
})