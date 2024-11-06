//imports and modules
const express = require("express");
var multer = require('multer');
var upload = multer();


const fileUpload = require("express-fileupload")
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app=express()
// MiddleWares Configs
app.use(bodyParser.json(
  {
    type: 'application/*+json'
  }
));
app.use(bodyParser.urlencoded({ extended: true ,limit:'50mb' }));
app.use(cookieParser());
app.use(cors({
  origin:true
}));
app.use(express.json({limit: '50mb'}));

app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(fileUpload({
  useTempFiles:true
}))
app.use(upload.array()); 
app.use(express.static('public'));
app.disable('x-powered-by')
//Routes.
const auth=require("./Routes/AuthRoutes")
const payment=require('./Routes/PaymentRoute')
const admin=require('./Routes/AdminRoutes')
//Endpoints
app.use("/api/v1", auth) //user
app.use('/api/v1',payment)
app.use('/api/v1',admin)
module.exports = app