//imports and modules
const express = require("express");
const fileUpload = require("express-fileupload")
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app=express()
// MiddleWares Configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: true
}));
app.use(express.json())
app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(fileUpload())
app.disable('x-powered-by')
//Routes.

//Endpoints


module.exports = app