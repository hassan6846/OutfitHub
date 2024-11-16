const User = require("../../models/UserModel");
const Jwt = require("jsonwebtoken");
const GenerateOtp = require("../../utils/GenerateOtp");
const { SendOtpMail } = require("../../utils/Otpmailer");

const Register = async (req, res, next) => {
    const { username, email, phone, password } = req.body
    if (!username || !email || !phone || !password) {
        res
            .status(400)
            .json({
                success: false,
                message: "Please fill all the fields.",
            })
    }
    try {
        

        const FindByPhone = await User.findOne({ phone: phone });
        if (FindByPhone) {
            return res.status(409).json({
                success: false,
                message: "Phone Already Linked to Another Account",
            });
        }
        

        const FindByEmail = await User.findOne({ email });
        if (FindByEmail) {
            return res.status(409).json({
                success: false,
                message: "Email Already Linked to Another Account",
            });
        }
        
        const newUser = new User({
            username: username,
            email: email,
            password: password,
            phone: phone
        })

        await newUser.save();
        const token=Jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
            expiresIn:5000,
            
        })
        
        res.status(201).json({
            success:true,
            message:"User Created Sucessfully",
            user:newUser,
            token:token
        })
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
module.exports=Register