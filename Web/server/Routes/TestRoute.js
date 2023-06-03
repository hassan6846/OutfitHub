const express = require("express");
const { TestController } = require("../Controllers/TestController");
const { CreateProduct } = require("../Controllers/ProductController");
const { PostTest } = require("../Controllers/PostTest");
const testRouter = express.Router();

testRouter.get("/test", TestController);
testRouter.post("/add",CreateProduct)
testRouter.post("/testpost",PostTest)
module.exports = testRouter;
