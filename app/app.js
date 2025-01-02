//imports and modules
const express = require("express");
const  multer = require('multer');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
//connection to database
const { connectDb } = require("./config/dbConnect");
connectDb()

const app = express()
const upload = multer();
require("dotenv").config();


// MiddleWares Configs
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser({}));
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8888'], // Allow multiple origins
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(upload.array());
app.disable('x-powered-by')



//Routes.
const auth = require("./Routes/AuthRoutes")
const payment = require('./Routes/PaymentRoute')
const admin = require('./Routes/AdminRoutes')
const product = require('./Routes/ProductRoutes')
const order = require("./Routes/OrderRoutes")
const address=require("./Routes/AddressRoutes")
//Endpoints
app.use("/api/v1", auth) //user
app.use('/api/v1', payment)
app.use('/api/v1', product)
app.use('/api/v1', admin)
app.use('/api/v1', order)
app.use('/api/v1', address)



//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
module.exports = app