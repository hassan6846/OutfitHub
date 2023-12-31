const stripe=require("stripe")()

//process payment
const ProcesPayment=async (req,res,next)=>{

}

const sendStripeApiKey=async(req,res,next)=>{
  
    res.status(200)
    .json({ stripeApiKey:'none' });
}

module.exports={ProcesPayment,}