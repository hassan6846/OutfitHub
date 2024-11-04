const cloudinary = require("cloudinary").v2;

// Configure the SDK
cloudinary.config({
    cloud_name: 'diml3oeaw',
    api_key: '825142635866511',
    api_secret: 'WoyLjDKXWPZvXlbhSlx9yo3wc9I'

});

const uploadCloudinary = async (path) => {
    try {
        if (!path) return null
        //upload the file
        const response = cloudinary.uploader.upload(path, {
            resource_type: "auto",
            folder: "Ecommerce/products"
        })
        console.log((await response).url)
    } catch (error) {
        //remove uploaded file
       fs.unlinkSync(path)
       
        console.error(error);
        return error
    }
}

module.exports = uploadCloudinary;