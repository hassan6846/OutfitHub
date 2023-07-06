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
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(newUser._id);

    // Return response
    return res.status(201).json({
      success: true,
      msg: "User registered successfully",
      user: newUser,
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

// loginUser

module.exports = { registerUser };
