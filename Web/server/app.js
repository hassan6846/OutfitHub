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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));


// Body parsing middleware

app.use(fileUpload())
app.disable('x-powered-by')
//routes
app.use("/api/v1",user)
//for build version

//for non build version
// app.use(express.Router(path.join(__dirname,"../client/public")))
// console.log(__dirname)

// app.get("/",function(req,res){
//   res.sendFile(path.join(__dirname,'../client/public/index.html'))
// })

// Listen
const port = process.env.PORT;
app.listen(port, function (req, res) {
  console.log(process.env.MSG);
  console.log(`app is running on ${port}`);
});
