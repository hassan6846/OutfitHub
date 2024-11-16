import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ENDPOINT } from '../../../api/Endpoint';
import { toast } from 'react-hot-toast';
const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(5000); // Example amount in cents
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    if (!stripe || !elements) {
      setMessage('Stripe.js has not loaded yet.');
      setLoading(false);
      return;
    }

    try {
      // Send the amount to your backend
      const response = await fetch(`${ENDPOINT}/payment/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('Failed to get client secret from server.');
      }

      // Confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('Payment succeeded!');
        toast.success(message)
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred.');
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Payment Amount</h2>
        <input
          type="number"
          value={amount / 100} // Convert cents to dollars for UI
          onChange={(e) => setAmount(Number(e.target.value))} // Convert dollars to cents
        />
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
