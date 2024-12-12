import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { FaRegMoneyBillAlt,  } from "react-icons/fa"; // Add icons for price, cart, etc.
import axios from "axios";
import { ENDPOINT } from "../../../api/Endpoint";
import "./AllProducts.css";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: allProducts } = await axios.get(`${ENDPOINT}/admin/product/all`);
        setData(allProducts.data);
        setLoading(false);
      } catch (error) {
        console.log("Error While Fetching The Data", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can add a loading spinner or a placeholder here
  }

  return (
    <div>
      <p className="wishlist_page_head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Products Management
      </p>
      <div className="all_product_actions" style={{ marginBottom: "1rem" }}>
        <Link to="/admin/products/add">
          <MDBBtn style={{ backgroundColor: "#00BA9D", display: "flex", alignItems: "center", columnGap: "0.5rem" }}>
            Add new Product <IoAddCircle size={30} />
          </MDBBtn>
        </Link>
      </div>
      <p style={{ color: "#848484", fontSize: "14px" }}>
        View Products: <span style={{ fontWeight: "bold" }}>7</span>/<span>12</span>
      </p>

      <div className="products_grid">
        {data.map((product, index) => (
          <div key={index} className="product_card" style={styles.card}>
            <div className="product_img" style={styles.imgContainer}>
              <img src={product.image[0]} alt={product.name} style={styles.productImage} />
            </div>
            <div className="product_details" style={styles.detailsContainer}>
              <h5 style={styles.productTitle}>{product.name}</h5>
              <p style={styles.productBrand}>{product.brand}</p>
              <p style={styles.productDescription}>{product.description}</p>
              <div style={styles.priceContainer}>
                <span style={styles.originalPrice}>
                  <FaRegMoneyBillAlt size={16} style={{ marginRight: "5px" }} />
                  Rs{product.RegularPrice}/-
                </span>
                <span style={styles.salePrice}>
                  Rs{product.SalePrice}/-
                </span>
              </div>
     
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    marginRight: "15px",
  },
  productImage: {

    width: "100%",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover", 

  },
  detailsContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  productBrand: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  productDescription: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "15px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  originalPrice: {
    textDecoration: "line-through",
    fontSize: "14px",
    color: "#888",
    marginRight: "10px",
  },
  salePrice: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#00BA9D",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  cartBtn: {
    backgroundColor: "#00BA9D",
    color: "#fff",
    padding: "10px 20px",
  },
  wishlistBtn: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    padding: "10px 20px",
  },
};

export default AllProducts;
