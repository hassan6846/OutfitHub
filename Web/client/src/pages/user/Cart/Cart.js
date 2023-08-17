import React from 'react';
import "./Cart.css"
const CartPage = () => {
  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                              className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                              onClick={(e) => {
                                const input = e.target.parentNode.querySelector('input[type=number]');
                                if (input) input.stepDown();
                              }}>
                              <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" defaultValue="1" type="number"
                              className="form-control form-control-sm" />

                            <button className="btn btn-link px-2"
                              onClick={(e) => {
                                const input = e.target.parentNode.querySelector('input[type=number]');
                                if (input) input.stepUp();
                              }}>
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                          </div>
                        </div>
                        {/* ... Repeat similar code for other items ... */}
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        {/* ... Rest of the summary section ... */}
                        <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
