const express = require("express");
const addProduct = require("../Controllers/AddProductCtrl");
const getAllProduct = require("../Controllers/AllProduct");
const mongooose=require("mongoose");
const Router = express.Router();
// explain route methods below

Router.post("/add",addProduct)
Router.get("/all",getAllProduct)
module.exports = Router;
