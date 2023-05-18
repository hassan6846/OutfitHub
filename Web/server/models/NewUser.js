const mongoose=require("mongoose");// require Mongoose for creating models
const jwt=require("jsonwebtoken") //for json web token
const bycrypt=require("bcrypt"); // for encryption

// creating new users Schema
const newUserSchema=new mongoose.Schema({
// fields with properties
    name:{
type:String,
trim:true,
required:[true,"Please Enter your Name"],
maxlength:32,
minlength:5
},
// userEmail field
email:{
      type: String,
       trim: true,
       required : [true, 'Please add a E-mail'],
       unique: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid E-mail']
},
// userPasswordField
password:{
    type: String,
    trim: true,
    required : [true, 'Please add a Password'],
    minlength: [6, 'password must have at least six(6) characters'],
    match: [
        /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
    ]
},
userRole:{
    
}
})
