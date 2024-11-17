import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,

  MDBCol,
  MDBContainer,
  MDBIcon,
  // eslint-disable-next-line 
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import "./Checkout.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../Slices/CartSlice";
import {AddressElement} from "@stripe/react-stripe-js"

const Checkout = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const cartProducts = useSelector((state) => state.cart.products);

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
                              cartProducts.map((product, index) => (
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
                              Products
                            </MDBTypography>
                            <MDBTypography tag="h5">€ 132.00</MDBTypography>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Shipping CHARGES
                            </MDBTypography>
                            <MDBTypography tag="h5">€ 5</MDBTypography>
                          </div>





                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total price
                            </MDBTypography>
                            <MDBTypography tag="h5">€ 137.00</MDBTypography>
                          </div>

                          <MDBBtn
                            href={isAuthenticated ? '/checkout' : 'login'}
                            style={{ backgroundColor: "#4BB497" }}
                            block
                            size="lg"
                          >
                            {isAuthenticated ? 'Checkout' : 'Register'}


                          </MDBBtn>
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
