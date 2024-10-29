const stripe=require("stripe")(
    ''
)
const CreatePayment=async(req,res)=>{
    try {
        //convert amount to paisa
        const ammountinPaisa=req.body.amount*100
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            sucess:false,
            msg:"Internal Server Error From Payment"
        })
    }
}