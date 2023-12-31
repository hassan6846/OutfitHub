const UserModel = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

// module
async function registerUser(req, res, next) {
  // Getting username, email, and password
  const { username, email, password } = req.body;
  // If any field is empty
  if (!(username || email || password)) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all fields",
    });
  }

  try {
    // Check if email already exists
    const duplicateEmail = await UserModel.findOne({ email });
    if (duplicateEmail) {
      return res
        .status(409)
        .json({
          success: false,
          msg: "Email Already Exists.",
        })
    }
    const user = new UserModel({
      username,
      email,
      password,
    });
    // Save the user to the database
    const savedUser = await user.save();

    //payload
    const payload = {
      user_id: savedUser._id,
      name: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
    }
    // Generate token for the user
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    // --sending cookie Response
    res
      .cookie("AccessToken", token, {
        httpOnly: true,
        path: "/",
        httpOnly: true,
        secure: true,
        expiresIn: new Date(Date.now() * 24 * 60 * 1000),
      })
      .status(201)
      .json({
        success: true,
        msg: "Registered successfully",
        token: token,

      });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      success: false,
      msg: `Register Error:Internal server error${error.message}`,
      error: error.message,
    });
  }
  next()
}
module.exports = { registerUser };
