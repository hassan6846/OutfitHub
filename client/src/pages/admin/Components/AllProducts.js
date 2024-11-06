import React, { useState, useEffect } from "react";

import "./AllProducts.css";
import { MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import axios from "axios";
import { ENDPOINT } from "../../../api/Endpoint";

// localhost:4000/api/v1/admin/product/all
const AllProducts = () => {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: allproducts } = await axios.get(`${ENDPOINT}/admin/product/all`);
        
        setdata(allproducts.data);
        console.log(allproducts.data); // Logs after data is set

        // Set loading to false after data is fetched and state is set
        setloading(false);
      } catch (error) {
        console.log("Error While Fetching The data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Products Manegment <span></span> </p>
      <div style={{ marginBottom: "1rem" }} className="all_product_actions"> <Link to="/admin/products/add"><MDBBtn style={{ backgroundColor: "#00BA9D", display: "flex", alignItems: "center", columnGap: "0.5rem" }}>Add new Product <IoAddCircle size={30} /></MDBBtn></Link>  </div>
      <p style={{ color: "#848484", fontSize: "14px" }}>View Products:<span style={{ fontWeight: "bold" }}>7</span>/<span>12</span></p>

      <div className="products_grid">

      </div>
    </div>
  );
};

export default AllProducts;
