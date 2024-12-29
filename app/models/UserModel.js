const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter your name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
      validate: [
        validator.isAlphanumeric,
        "Username should contain only letters and numbers",
      ],
    },
    email: {
      type: String, // Define type first
      required: [true, "Email is required"],
      unique: true, // Separate unique from required
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phone: {
      type: String, // Define type first
      required: [true, "Kindly Enter the Contact Number"],
      unique: true, // Separate unique from required
      maxLength: [15, "Contact Number cannot exceed 15 characters"],
      validate: [validator.isMobilePhone, "Please Enter a valid Contact Number"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      maxLength: [30, "Password cannot exceed 30 characters"],
    
      validate: [
        validator.isStrongPassword,
        "Password should contain at least 1 lowercase, 1 uppercase, 1 number, 1 special character, and should be 8 characters long",
      ],
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        default: "https://api.dicebear.com/7.x/pixel-art/svg",
      },
    },
    role: {
      type: [String],
      default: ["user"],
      enum: ["user", "vendor", "admin"], // Fixed extra space
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
      enum: ["male", "female", "other", "undefined"],
      default: "undefined",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// HASHING PASSWORD BEFORE SAFE METHOD
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// HASH COMPARE METHOD
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// GET RESET PASSWORD TOKEN
UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
