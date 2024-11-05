const cloudinary = require("cloudinary").v2;

// Configure the SDK
cloudinary.config({
    cloud_name: 'diml3oeaw',
    api_key: '825142635866511',
    api_secret: 'WoyLjDKXWPZvXlbhSlx9yo3wc9I'
});

module.exports = cloudinary;
