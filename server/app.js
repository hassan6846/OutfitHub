//imports and modules
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload")
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

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
const user=require("./Routes/UserRoutes")
//Endpoints
app.use("/api/v1", user)
module.exports = app