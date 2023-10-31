//imports and modules
const express = require("express");
const fileUpload = require("express-fileupload")
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// Importing all routes
const user = require("./Routes/UserRoutes")
const product = require("./Routes/ProductRoutes");
const { sendEmail } = require("./utils/SendMail")

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

require("dotenv").config();
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

// Listen

module.exports = app