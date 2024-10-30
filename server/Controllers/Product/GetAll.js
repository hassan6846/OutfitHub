const Products=require("../../models/ProductSchema")

const AllProducts=async(req,res)=>{

    try {
        const products=await Products.find({})
        res.status(200).json({
            success:true,
            data:products
        })
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
}
module.exports=AllProducts