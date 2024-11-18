import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import "./Checkout.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../../Slices/CartSlice";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js"
import { useState } from "react";
import { ENDPOINT } from "../../../api/Endpoint";
import { toast } from "react-hot-toast"
import axios from "axios";

const Checkout = () => {
  const navigate=useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch()
  //selector
  const cartProducts = useSelector((state) => state.cart.products);
  const userid = useSelector((state) => state.user.userid)
  const totalAmount = cartProducts.reduce((acc, product) => acc + product.SalePrice * product.quantity, 0);
  //Loadig States
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState("");

  const [isCardValid, setIsCardValid] = useState(false);
  const [address, setaddress] = useState("")
  const [City, setCity] = useState("Lahore")
  const [Phone, Setphone] = useState("+92 000 0000000")

  const lightTheme = {
    style: {
      base: {

        color: "#000000",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",

        fontSize: "16px",
        "::placeholder": {
          color: "#d3d3d3",
        },
      },
      invalid: {
        color: "#ff4d4f",
        iconColor: "#ff4d4f",
      },
    },
  };
  //Validate fieldss
  const isFormValid = address && City && Phone && isCardValid;
  const handleCardChange = (event) => {
    setIsCardValid(event.complete); // If card info is valid, set isCardValid to true
  };

  const CreateOrder = async () => {
    try {
     
      const response = await axios.post(
        `${ENDPOINT}/order/new`,
        {
          id: userid,
          address: address,
          city: City,
          phone: Phone,
          total: amount,
          method: "CreditCard",
          product: cartProducts,
        },
        { withCredentials: true, withXSRFToken: true }
      );
  

      if (response.status === 200) {
        toast.success("Order placed successfully!");

      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong! Please try again.");
    }
  };

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

      const response = await fetch(`${ENDPOINT}/payment/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('Failed to get client secret from server.');
      }
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('Payment succeeded!');
        toast.success("Payment Sucessfull")
         await CreateOrder()
          navigate('/user/order')
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred.');
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="h-110 h-custom" style={{ backgroundColor: "white" }}>
      {
        cartProducts.length > 0 ? (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol className="d-flex justify-content-center" size="13">
                <MDBCard
                  className="ipad-card  card-registration card-registration-2"
                  style={{ borderRadius: "0px", boxShadow: "none" }}
                >
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography
                              tag="h1"
                              className="fw-bold mb-0 text-black"
                            >
                              Your Cart
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">

                            </MDBTypography>
                            <MDBTypography style={{ cursor: "pointer" }} onClick={() => dispatch(clearCart())}>
                              {""}
                            </MDBTypography>
                          </div>



                          <div className="cart_items_contional">

                            {
                              cartProducts.slice(0, 4).map((product, index) => (
                                <><hr className="my-4" />
                                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                      <MDBCardImage
                                        src={product.image[0]}
                                        fluid
                                        className="rounded-3"
                                        alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                      <MDBTypography tag="h6" className="text-muted">
                                        {product.tags[0]}
                                      </MDBTypography>
                                      <MDBTypography tag="h6" className="text-black mb-0">
                                        {product.name}
                                      </MDBTypography>
                                    </MDBCol>

                                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                                      <MDBTypography tag="h6" className="mb-0">
                                        Rs {product.SalePrice}
                                      </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-end">

                                    </MDBCol>
                                  </MDBRow></>

                              ))
                            }








                            <hr className="my-4" />


                          </div>


                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">

                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography
                            tag="h3"
                            className="fw-bold mb-5 mt-2 pt-1"
                          >
                            Payment Details
                          </MDBTypography>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total
                            </MDBTypography>
                            <MDBTypography tag="h5">132 Rs</MDBTypography>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Shipping CHARGES
                            </MDBTypography>
                            <MDBTypography tag="h5">250 Rs</MDBTypography>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Quantity
                            </MDBTypography>
                            <MDBTypography tag="h5"> x 1</MDBTypography>
                          </div>




                          <hr className="my-4" />
                          <MDBTypography
                            tag="h3"
                            className="fw-bold mb-5 mt-2 pt-1"
                          >
                            Shipment Details
                          </MDBTypography>

                          <div className="d-flex justify-content-between mb-5 flex-d row">

                            <MDBInput wrapperStyle={{ marginBottom: 10 }} onChange={(e) => setaddress(e.target.value)} value={address} label="Address" />

                            <MDBInput wrapperStyle={{ marginBottom: 10 }} value={City} onChange={(e) => setCity(e.target.value)} label="City" />
                            <MDBInput wrapperStyle={{ marginBottom: 10 }} value={Phone} onChange={(e) => Setphone(e.target.value)} label="Phone" />


                          </div>
                          <form onSubmit={handleSubmit}>
                            <MDBTypography
                              tag="h3"
                              className="fw-bold mb-5 mt-2 pt-1"
                            >
                              Card Details
                            </MDBTypography>
                            <div className="d-flex justify-content-between mb-5 flex-d row">
                              <CardElement onChange={handleCardChange} options={lightTheme} />
                            </div>

                            <MDBBtn
                              type="submit"
                              style={{ backgroundColor: "#4BB497" }}
                              block
                              size="lg"
                              disabled={!isFormValid || !stripe || loading}
                            >
                              {loading ? 'Processing...' : 'Pay'}


                            </MDBBtn>
                          </form>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          <div className="no_items_inCart">
            <p className="no_cart_items_msg">
              There are no items in this cart
            </p>
            <Link to="/shop" className="no_cart_Link">
              CONTINUE SHOPPING
            </Link>
          </div>
        )
      }




    </section>
  )
}

export default Checkout
