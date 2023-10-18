import  React from "react";
import "./AllProducts.css";
import { MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import {DataGrid} from "@mui/x-data-grid"
const AllProducts = () => {
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Products Manegment <span></span> </p>
      <div style={{marginBottom:"1rem"}} className="all_product_actions"> <Link to="/admin/products/add"><MDBBtn style={{ backgroundColor: "#00BA9D", display: "flex", alignItems: "center", columnGap: "0.5rem" }}>Add new Product <IoAddCircle size={30} /></MDBBtn></Link>  </div>
<p style={{color:"#848484",fontSize:"14px"}}>View Products:<span style={{fontWeight:"bold"}}>7</span>/<span>12</span></p>

<div className="products_grid">

</div>




    </div>
  );
};

export default AllProducts;
