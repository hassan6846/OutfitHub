const stripe = require("stripe")(process.env.STRIPE_KEY);

const CreatePayment = async (req, res, next) => {
    const shippingCharges = 200; 

    try {
        const amountInPaisa = req.body.amount * 100; 

        if (amountInPaisa < 20000) {
            return res.status(400).json({
                success: false,
                message: "Order Amount must be at least 200 PKR",
            });
        }

        const chargeFeeInPaisa = shippingCharges * 100;

        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInPaisa + chargeFeeInPaisa, 
            currency: "pkr",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Payment error:", error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = CreatePayment;
