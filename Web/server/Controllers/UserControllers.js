const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// registerUser
async function registerUser(req, res) {
  // Getting username, email, and password
  const { username, email, password } = req.body;

  // If any field is empty
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all fields",
    });
  }

  try {
    // Check if email already exists
    const duplicateEmail = await UserModel.findOne({ email });
    if (duplicateEmail) {
      return res.status(409).json({
        success: false,
        msg: "Email is already registered",
      });
    }

    // Hash the password
    const SALT_ROUNDS = 10
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const user = new UserModel({
      username,
      email,
      password: hash,
    });

    // Save the user to the database
    const savedUser = await user.save();

    // Generate token for the user
    const token = generateToken(savedUser._id);

    res.status(201).json({
      success: true,
      msg: "User created successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
}

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
/**
 * LOGIN FUNCTION
 * 
 *
 */
const loginUser = async (req, res) => {
  // Getting email and password
  const { email, password } = req.body;

  // If email or password is missing
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all required fields",
    });
  }

  try {
    // Find user by email
    const findUser = await UserModel.findOne({ email });
    const SALT_ROUNDS = 10
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
   if(findUser){
   await bcrypt.compare(password,hash,async function(err,result1){
      if(result1){
        res.status(201).json({
          success:true,
          "type":"Login",
          "Msg":"User Logged in Sucessfully",
          token:generateToken(findUser._id)
        })
      }
    })
   }
   else{
    res.status(404).json({
     success:true,
     "Msg":"Invaild Credentials."
    })}
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
};
module.exports = { registerUser, loginUser };
