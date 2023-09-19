
const mongoose=require("mongoose");
const jwt =require("jsonwebtoken");
const bycrypt=require("bcrypt")
const crypto =require("crypto")
const validator=require("validator")

const UserSchema=new mongoose.Schema({
username:{
    type:String,
    require:[true,"Please  Enter  your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
},
email:{
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
},
password:{
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
},
avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
     default:"https://randomuser.me/api/"
    }
  },
  role: {
    type: String,
    default: "user",
  },
  phone:{
    type:Number,
   default:""
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  VerifiedEmail: {
    type: String,
    default: "NO",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  lastPasswordUpdate:Date

})


//HASHING PASSWORD BEFORE SAFE METHOD.. 
UserSchema.pre('save', async function (next) {
  if (this.isModified("password")) {
    this.password = await bycrypt.hash(this.password, 10); 
  }
  next();
});

// HASH COMPARE METHOD

UserSchema.methods.comparePassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};
const User=mongoose.model("User",UserSchema)
// Reset password TOKEN

module.exports=User