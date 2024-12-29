const User = require("../../models/UserModel")

const CountUser = async (req, res) => {
    try {
        const Count = await User.countDocuments({})
        res.status(200).json({
            success: true,
            data: Count
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

module.exports = CountUser