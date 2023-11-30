//imports and modules
const express = require("express");
const fileUpload = require("express-fileupload")
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// Importing all routes
const user = require("./Routes/UserRoutes")
const product = require("./Routes/ProductRoutes");
const { sendEmail } = require("./utils/SendMail");
const { cloudinary } = require("./utils/Cloudinary");

// const payment= require("./Routes/PaymentRoute")
//admin routes
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));


app.use(fileUpload())
app.disable('x-powered-by')
/////


app.get('/send', sendEmail);
//routes
app.use("/api/v1", user)
// app.use("/api/v1",payment)
app.use("/api/v1", product)
// app.use("/api/v1",orders)
// app.use("/api/v1", payment);

// Listen for upload Images.
const url='https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
async  function main(){
  const result=await cloudinary.uploader.upload(url)
  console.log(result.secure_url)
}
main()
module.exports = app