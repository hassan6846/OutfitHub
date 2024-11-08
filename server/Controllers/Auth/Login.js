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

        // Find user by email
        const finduser = await User.findOne({ email: email });
        if (!finduser) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials/User doesn't exist.",
            });
        }

        // Log the found user and password
        console.log("Found user:", finduser);
        console.log("Password from request:", password);
        console.log("Hashed password in DB:", finduser.password);

        // Compare password
        const isCorrectPassword = await bcrypt.compare(password, finduser.password);
        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid password(This is test only ill use invalid Credentials for better security)",
            });
        }

        // If password is correct, send token
        const token = Jwt.sign({ id: finduser._id }, process.env.JWT_SECRET, {
            expiresIn: "1h", // Adjust as necessary
        });
        res.cookie(token, "token")
        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token: token,
            user: finduser, // Only return necessary user data
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
