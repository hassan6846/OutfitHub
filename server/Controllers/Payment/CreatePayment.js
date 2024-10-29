const stripe = require("stripe")(process.env.STRIPE_KEY);

const CreatePayment = async (req, res, next) => {
    const shippingCharges = 200; // Shipping charges in PKR

    try {
        // Correct variable name for amount
        const amountInPaisa = req.body.amount * 100; // Convert amount to paisa

        // Validate amount
        if (amountInPaisa < 20000) {
            return res.status(400).json({
                success: false,
                message: "Order Amount must be at least 200 PKR",
            });
        }

        // Convert platform fee to paisa
        const chargeFeeInPaisa = shippingCharges * 100;

        // Creating payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInPaisa + chargeFeeInPaisa, // Total amount in paisa
            currency: "pkr",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        // Return client secret to the client
        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (error) {
        console.error("Payment error:", error); // More specific logging
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

module.exports = CreatePayment;
