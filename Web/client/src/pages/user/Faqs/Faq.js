import React from 'react'
import Faq from "react-faq-component"
// css
import "./Faq.css"
//components
import ResponsiveNav from "../../../Layouts/NavbarMain/ResponsiveNav"
import Footer from '../../../Layouts/footer/Footer'

const FaqPage = () => {
  const faqConfigs = {
    animate: true,
    tabFocus: true,
    openOnload: 0

  }
  const data = {
    title: "",
    rows: [
      {
        title: "What are the delivery charges?",
        content: `Delivery charge is the fee that has to be paid for the on-time delivery of a purchased product. Our standard shipping charges are Rs 150 but it keeps on changing based on the number of products purchased. For the best understanding please see the total shipping fee added to your order at checkout page.`
      },
      {
        title: "I Want to become Seller",
        content: "To become a seller, you'll typically need a product or service to sell, a business plan, necessary permits or licenses, and a platform to sell on (such as an online marketplace or a physical store)."
      },
      {
        title: "How can I cancel my order?",
        content: "In order to cancel your order, please login to clicky app in your my account section. Open the order you want to cancel and you will see an option to cancel the order. Your order can only be cancelled before it reaches the ‘Dispatched’ status in your my account on Clicky app."
      },
      {
        title: "What are the delivery charges?",
        content: "Delivery charge is the fee that has to be paid for the on-time delivery of a purchased product. Our standard shipping charges are Rs 150 but it keeps on changing based on the number of products purchased. For the best understanding please see the total shipping fee added to your order at checkout page."
      },
      {
        title: "I can't sign in to my account.",
        content: "Go to Reset password page. Fill in your registered phone or email id and tap Rest Password. An otp will be sent to your medium either phone or email. Enter the otp and set a new password."
      },
      {
        title: "What is the procedure for Returns or Exchange?",
        content: "If you want to exchange for your product kindly call our helpline"
      },
      {
        title: "What is your return policy?",
        content: "Any Product/item can be returned or exchanged if it is incorrect/ incomplete or defective/ damaged within 7 days after delivery. Clicky.pk reserves the right to reject a return request found misusing of our generous returns policy or a product received with missing tags and other components. Please note, delivery charges are non-refundable."
      },
      {
        title: "What are the conditions for return or exchange?",
        content: `The Product must be like in same condition as delivered, Unworn, unwashed and without any flaws The product must include the original tags, with original packaging.
      
      `
      },
      {
        title: "How can I cancel my order?",
        content: "In order to cancel your order, please login to DESIGN app in your my account section. Open the order you want to cancel and you will see an option to cancel the order. Your order can only be cancelled before it reaches the ‘Dispatched’ status in your my account on DESIGN app."
      },
      {
        title: "What is DESIGN's cancellation policy?",
        content: "Only orders that haven't left the fulfilment centre can be cancelled. If the order has already been shipped from our fulfilment centre, you can refuse to accept it and send it back with the courier. In case you have paid using Netbanking/Debit/Credit Card, we’ll refund your order amount only after we’ve received the cancelled order at our fulfilment centre."
      }
    ]
  }
  return (
    <>
      <ResponsiveNav />

      <div className='faqs_div_container' >
        <p className='faqs_head'>Frequently asked questions</p>
        <Faq

          styles={{
            titleTextColor: "#131039",
            rowTitleColor: "#666",
            rowContentColor: "#454242"
          }}
          data={data}
          config={faqConfigs}
        />
      </div>
      <Footer />
    </>
  )
}

export default FaqPage