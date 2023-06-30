//imports and modules
const express = require("express");
const fileUpload=require("express-fileupload")
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path=require("path")
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

// Connect to the database
dbConnect(); 
// Importing all routes
const user=require("./Routes/UserRoutes")
// Middlewares
app.use(bodyParser.json())
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
app.use(fileUpload())
app.disable('x-powered-by')
//routes
app.use("/api/v1",user)
//for build version
app.use(express.static(path.join(__dirname,"../client/build")))
//for non build version
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


// Listen
const port = process.env.PORT;
app.listen(port, function (req, res) {
  console.log(process.env.MSG);
  console.log(`app is running on ${port}`);
});
