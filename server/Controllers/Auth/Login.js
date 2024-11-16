const User = require("../../models/UserModel");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        
        const finduser = await User.findOne({ email: email });
        if (!finduser) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials/User doesn't exist.",
            });
        }

        
        const isCorrectPassword = await bcrypt.compare(password, finduser.password);
        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        
        const token = Jwt.sign(
            { id: finduser._id, role: finduser.role }, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        
        res.cookie("token", token, { httpOnly: true, secure: false, maxAge: 3600000 });

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            user: finduser,
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

module.exports = Login;
