const express = require("express")
const router = express.Router()

//controller
const CreateNewAddress = require("../Controllers/Address/CreateNewAddress");
const GetMyBooks = require("../Controllers/Address/GetMyBooks");


router.route("/address/new").post(CreateNewAddress)
router.route("/address/all").get(GetMyBooks)


module.exports = router