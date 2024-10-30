import React from 'react'
import {PaymentElement} from "@stripe/react-stripe-js"
function Checkout() {
  return (
    <div>
        <p>ELlo this is john pork</p>
        <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Checkout
