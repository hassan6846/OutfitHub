const User = require("../../models/UserModel");
const Jwt = require("jsonwebtoken")
const bycrypt = require("bcrypt")

const Login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            res.status(400).json({
                sucess: false,
                message: "Please Fill All required Fields"
            })
        }

        //find user and compare password and email
        const finduser = await User.findOne({ email: email })
        if (!finduser) {
            res.status(404).json({
                sucess: false,
                message: "Invalid Credentials/User dont exist"
            })
        }
        //compare password
        const isCorrectPassword = await bycrypt(password, finduser.password)

        if (!isCorrectPassword) {
            return res.status(401).json({
                sucess: false,
                msg: "Invalid Password"
            })
        }

        //if password is correct then send token
        const token=Jwt.sign({id:finduser._id},process.env.JWT_SECRET,{
            expiresIn:5000,
            
        })

        return res.status(200).json({
            sucess:true,
            message:"Login Sucessfull",
            token:token,
            finduser
        })

    } 

    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }

}
module.exports={Login}