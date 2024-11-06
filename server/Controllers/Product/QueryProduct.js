//Search product.
const Product=require("../../models/ProductSchema")

const QueryProduct=async(req,res,next)=>{
    const {query}=req.params;
    if(!query){
        return res.status(400).json({
            success: false,
            msg: "Please provide a search query",
        });
    }
    try {
        const products = await Product.find({ name: { $regex: query, $options: 'i' } }).limit(5);
        if (!products) {
            return res.status(404).json({
                success: false,
                msg: "No products found",
            });
        }
        res.status(200).json({
            success: true,
            products: products,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
module.exports=QueryProduct