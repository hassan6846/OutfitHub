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
    bcrypt.genSalt(process.env.SALT_ROUNDS, function (err, salt) {
      bcrypt.hash(process.env.SUPER_SECRET, salt, function (err, hash) {
        const user = new UserModel({
          username,
          email,
          password: hash,
        });

        // Save the user to the database
        user.save();

        res.status(201).json({
          success: true,
          msg: "User created successfully",
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
      error: error.message,
    });
  }
}


// generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
///login user
 async function loginUser (req,res){

    //getting email and password
    const {email,password}=req.body;
    //empty request
    if(!email,!password){
     res.status(400).json({
       "Sucess":false,
       "Msg":"Kindly fill all fields"
     })}

  try{
    //find email 
    const findEmail=await UserModel.findOne({email}).select("+password")
    //if not email
    if(!findEmail){
      res.status(404).json({
      "Sucess":false,
      "Msg":"Invalid Email or password"
      })} 
//compare password
const ComparePassword=await findEmail.comparePassword(password)
if(!ComparePassword){
  return res.status(401).json({
    "Sucess":false,
    "Msg":"Invalid Email or password"
  })
}
if(ComparePassword){
  res.status(201).json({
    sucess:true,
    "Msg":"sucessfull loged in"
  })
}
  }
  
   catch(err){
    res.send(err)
    console.log(err)
  }}
module.exports = { registerUser,loginUser };
