const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)

//process payment
const ProcesPayment=async (req,res,next)=>{

}
const sendStripeApiKey=async(req,res,next)=>{
  
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
}

module.exports={ProcesPayment,}