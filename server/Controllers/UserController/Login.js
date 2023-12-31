const UserModel = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

// LOGIN MODULE...
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      msg: "Invalid Email Format.",
    });
  }

  // Checking and Password Exist
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all fields",
    });
  }

  try {
    // FINDING USER BY EMAIL
    const FindUser = await UserModel.findOne({ email }).select("+password");
//  if not find user
    if (!FindUser) {
      return res.status(404).json({
        success: false,
        msg: "Invalid Credentials",
      });
    }

    // MATCH PASSWORD HASH
    const isPasswordMatched = await FindUser.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Credentials",
      });
    }

    //generate Token
    const payload = {
      id: FindUser._id,
      name: FindUser.username,
      email: FindUser.email,
      role: FindUser.role,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
// if request matched send sucesss
    if (isPasswordMatched) {
      return res
        .cookie("AccessToken", token)
        .status(200)
        .json({
          sucess: true,
          msg: "Sucessfully Logged In",
          token: token,
        });
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message
    });
  }
  next()
};

module.exports = { loginUser };
