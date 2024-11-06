const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please  Enter  your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    type: String,
    required: [true, "Kindly Enter the Contact Number"],

  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],

  },
  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  role: {
    type: [String], 
    // ["user",'vendor','admin']
    default: ["user"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  IsVerifiedEmail: {
    type: Boolean,
    default: false,

  },
  gender:{
    type:String,
    required:false,
    default:"undefined",
    
  
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  lastPasswordUpdate: Date,
},{timestamps:true});

//HASHING PASSWORD BEFORE SAFE METHOD..
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bycrypt.hash(this.password, 10);
  }
  next();
});

// HASH COMPARE METHOD
UserSchema.methods.comparePassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
