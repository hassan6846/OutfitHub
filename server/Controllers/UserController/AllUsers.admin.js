const UserModel = require("../../models/UserModel")



// GET ALL USERS ADMIM 
const getAllUser = async (req, res, next) => {
  try {
    const AllUsers = await UserModel.find()
    res
      .status(200)
      .json({
        success: true,
        AllUsers
      })
  } catch (error) {
    console.log(error)
  }
}
module.exports = { getAllUser }