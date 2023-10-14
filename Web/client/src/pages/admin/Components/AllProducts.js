import React from "react";
import "./AllProducts.css";
import {MDBBtn} from "mdb-react-ui-kit"
import {Link} from "react-router-dom"
import {IoAddCircle} from "react-icons/io5"
const AllProducts = () => {
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Products Manegment <span></span> </p>
   <div className="all_product_actions"> <Link to="/admin/products/add"><MDBBtn style={{backgroundColor:"#00BA9D",display:"flex",alignItems:"center",columnGap:"0.5rem"}}>Add new Product <IoAddCircle size={30}/></MDBBtn></Link> </div>
    </div>
  );
};

export default AllProducts;
