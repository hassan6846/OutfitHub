import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js';
function Checkout() {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  )
}

export default Checkout
