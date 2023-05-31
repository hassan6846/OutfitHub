const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect");

require("dotenv").config();

dbConnect(); // Connect to the database

// Importing all routes

function SendJson(req, res) {
  res.json({
    "Hello": "Test1 Passed"
  });
}

app.use("/", SendJson);

// Middlewares
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true
}));

// Listen
const port = process.env.PORT;
app.listen(port, function (req, res) {
  console.log(process.env.MSG);
  console.log(`app is running on ${port}`);
});
