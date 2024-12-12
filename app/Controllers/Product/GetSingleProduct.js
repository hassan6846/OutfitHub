const Product = require("../../models/ProductSchema");



const GetSingleProduct=async(req,res,next)=>{
    const {id}=req.params
  if(!id){
    return res.status(400).json({
        success: false,
        msg: "Please fill all required fields",
    });
  }
  try {
    const product=await Product.findById(id)
    res.json({
        sucess:true,
        data:product
    })
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
        success: false,
        message: "Internal server error please check your internet",
    });
  }
}
module.exports=GetSingleProduct