const stripe = require("stripe")(process.env.STRIPE_KEY);

const CreatePayment = async (req, res, next) => {
    const shippingCharges = 200; // Shipping charges in PKR

    try {
        const amountInPaisa = req.body.amount * 100; // Convert amount to paisa

        if (amountInPaisa < 20000) {
            return res.status(400).json({
                success: false,
                message: "Order Amount must be at least 200 PKR",
            });
        }

        const chargeFeeInPaisa = shippingCharges * 100;

        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInPaisa + chargeFeeInPaisa, // Total amount in paisa
            currency: "pkr",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        // Return only the client_secret with the correct key name
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
