const { default: mongoose } = require("mongoose");
const validator = require("validator");


const AddressSchema = new mongoose.Schema({
    addressTitle: {
        type: String,
        validate: [validator.isAlphanumeric, "Please Enter a valid Address "],
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
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }

    }

}, {
    timestamps: true
}

)
const Address = mongoose.model('Address', AddressSchema)
module.exports = Address