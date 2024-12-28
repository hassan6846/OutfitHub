const mongoose = require("mongoose")
const LikedSchma = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    likedItems: [{
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true })

module.exports = mongoose.model("Liked", LikedSchma)
