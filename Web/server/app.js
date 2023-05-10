const express=require("express")
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
    console.log(`app is running on ${port}`)
})