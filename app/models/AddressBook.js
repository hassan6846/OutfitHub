const { default: mongoose } = require("mongoose");
const validator = require("validator");


const AddressSchema = new mongoose.Schema({
    addressTitle: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,

    },
    mailno: {
        type: String,
        required: false,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    zipCode: {
        type: String,
        required: true,
        trim: true,
    },
    streetAddress: {
        type: String,
        required: true,
        trim: true
    },

    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'

    },
    phone: {
        type: String,
        required: true,
    },
    PinDrop: {
        lat: {
            default: 0,
            type: String,
            required: false
        },
        long: {
            default: 0,
            type: String,
            required: false
        }

    },
 createdAt:{
        type: Date,
        default: Date.now
 }
}, {
    timestamps: true
}

)
const Address = mongoose.model('Address', AddressSchema)
module.exports = Address