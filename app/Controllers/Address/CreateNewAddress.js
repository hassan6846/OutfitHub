const Address = require("../../models/AddressBook");
const User = require("../../models/UserModel");



const CreateNewAddress = async (req, res) => {
    const {
        title,
        city,
        mailno,
        state,

        country,
        zipCode,
        phone,
        lat,
        long,
        streetAddress,
        id,

    } = req.body

    if (!title || !city || !state || !country || !zipCode || !streetAddress || !id ||!phone ) {
        return res.status(400).json({ msg: "Please fill all the fields" })
    }

    try {
        //find user by id
        const user = await User.findById(id)
        if (!user) {
            return res.status(400).json({ msg: "User not found" })
        }
        //create new address
        const newAddress = new Address({
            addressTitle: title,
            city,
            mailno,
            state,
            country,
            zipCode,
            streetAddress,
            phone,
            PinDrop: {
                lat,
                long
            },
            user: id
        })
        await newAddress.save()
        res.status(200).json({ msg: "Address created successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message})
    }
}


module.exports = CreateNewAddress;
