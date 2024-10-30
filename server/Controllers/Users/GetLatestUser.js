const User=require("../../models/UserModel")


const GetUsers=async(req,res)=>{
try {
    const users=await User.find({})
    res.status(200).json({
        success:true,
        users
    })
} catch (error) {
    console.error(error);
    return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
}
}
module.exports=GetUsers