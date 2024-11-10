const User = require("../../models/UserModel");
const Jwt = require("jsonwebtoken")


const Logout = async (req, res, next) => {
    try {

        res.status(200).json({
            token: null,
            sucess: true,
            message: "Logout sucessfully"
        }).clearCookie("token");
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }

}
module.exports = Logout