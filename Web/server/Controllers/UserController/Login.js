const validator = require("validator");
const UserModel = require("../../models/UserModel")
const jwt = require("jsonwebtoken")

// LOGIN
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Checking Email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Email Format. Please enter a valid email address.",
            });
        } else if (!email || !password) {
            // IF EMPTY FIELDS
            return res.status(400).json({
                success: false,
                msg: "Please fill in all required fields (email and password).",
            });
        }

        // FINDING USER BY EMAIL
        const FindUser = await UserModel.findOne({ email }).select("+password");
        if (!FindUser) {
            return res.status(404).json({
                success: false,
                msg: "Invalid Credentials",
            })
        }
        // MATCH PASSWORD HASH
        const isPasswordMatched = await FindUser.comparePassword(password)
        if (!isPasswordMatched) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Credentials"
            })
        }

        const LOGIN_Token = jwt.sign({
            id: FindUser._id,
            name: FindUser.username,
            email: FindUser.email,
            role: FindUser.role,
        }, process.env.JWT_SECRET, { expiresIn: "1d" })

        if (isPasswordMatched) {
            return res
                .cookie("AccessToken", LOGIN_Token)
                .status(200)
                .json({
                    Success: true,
                    Msg: "HELLO FROM INSIDE",
                    Token: LOGIN_Token
                })
        }
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
        });
    }
};
module.exports = { loginUser }