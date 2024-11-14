//imports and modules
const express = require("express");
var multer = require('multer');
var upload = multer();



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
  methods: "GET,POST,PUT,DELETE",
  origin: "http://localhost:3000", // Frontend URL 
  credentials: true, // Allow sending and receiving cookies
}));
app.use(express.json({limit: '50mb'}));

app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));

app.use(upload.array()); 
app.use(express.static('public'));
app.disable('x-powered-by')
//Routes.
const auth=require("./Routes/AuthRoutes")
const payment=require('./Routes/PaymentRoute')
const admin=require('./Routes/AdminRoutes')
const product=require('./Routes/ProductRoutes')
const order=require("./Routes/OrderRoutes")
//Endpoints
app.use("/api/v1", auth) //user
app.use('/api/v1',payment)
app.use('/api/v1',product)
app.use('/api/v1',admin)
app.use('/api/v1',order)
module.exports = app