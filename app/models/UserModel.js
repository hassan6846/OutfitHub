const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please  Enter  your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
    validate: [validator.isAlphanumeric, "Username should contain only letters and numbers"],
  },
  email: {
    required: [true, "Please Enter Your Email"],
    unique: [true, "Email Already Exists"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    unique: [true, "Phone Number Already Exists"],
    type: String,
    required: [true, "Kindly Enter the Contact Number"],
    maxLength: [15, "Contact Number cannot exceed 15 characters"],
    validate: [validator.isMobilePhone, "Please Enter a valid Contact Number"],


  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
    maxLength: [30, "Password cannot exceed 30 characters"],


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
        "https://api.dicebear.com/7.x/pixel-art/svg",
    },
  },
  role: {
    // ["user",'vendor','admin']
    type: [String],
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
  gender: {
    type: String,
    required: false,
    enum: ["male", "female", "other", "undefined"],
    default: "undefined",



  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

}, { timestamps: true });

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

// GET RESET PASSWORD TOKEN
UserSchema.method.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
}
const User = mongoose.model("User", UserSchema);
module.exports = User;
