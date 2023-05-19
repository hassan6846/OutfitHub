const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const cors=require("cors");
const morgan=require("morgan");
require("dotenv").config();
//importing all routes


//middlewares 
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json({  //bodyparser
    limit:'100mb'
}))
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '100mb',
    extended: true
    }));



// connecting to databse
mongoose.connect(process.env.DatabaseUrl)
  .then(() => {
    console.log('DB connected');
  }).then(
    console.log(process.env.DatabaseUrl)
  )
  .catch((err) => {
    console.log(err);
  });



// listen
const port=process.env.PORT;
app.listen(port,function(req,res){
    console.log(process.env.MSG);
    console.log(`app is running on ${port}`)
})