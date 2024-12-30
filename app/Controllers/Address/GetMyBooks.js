const Address = require("../../models/AddressBook");



const GetMyBooks = async (req, res) => {
    const {id}=req.body
    if(!id){
        return res.status(400).json({msg:"Please provide user id"})
    }
    try {
        const address = await Address.find({user:id})
        if(!address){
            return res.status(400).json({msg:"No address found"})
        }
        res.status(200).json({address:address})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error.message})
    }
}
module.exports = GetMyBooks;