import React, { useEffect, useState } from "react";
import "./products.css";
import { useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import { ENDPOINT } from "../../../api/Endpoint";
import "swiper/css";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
const subcategories = {
  men: [
    "All",
    "sports",
    "sneakers",
    "casual",
    "trousers",
    "Peshawari",
    "Slippers",
    "Sandals",
    "T-Shirts",
    "Shirts",
    "Casual Shirts",
    "Bags",
    "Sleep & Lounge",
    "Hoodies",
    "Coats",
    "Jackets",
    "Sweaters & Sweatshirts",
    "Activewear",
    "Jeans",
    "Watches",
  ],
  women: [
    "All",
    "Lawn",
    "Pumps",
    "Sneakers",
    "Shalwar kameez",
    "kurta",
    "Tops",
    "Handbags",
    "Khussa",
    "Jeans",
    "Sleepwear",
    "Bottoms",
    "Suits",
    "Makeup",
    "Dresses",
    "Winter Wear",
  ],
  girls: ["All", "Clothings"],
  kids: ["All", "Clothings"],
};

const Products = () => {
  const location = useLocation();
  const state = location.state;

  const [category, setCategory] = useState("men");
  const [subcategory, setSubcategory] = useState("all");
  const [tabValue, setTabValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false); // Sorting state

  const handleTabChange = (event, newValue) => {
    const categoryKeys = Object.keys(subcategories);
    const selectedCategory = categoryKeys[newValue];
    setCategory(selectedCategory);
    setSubcategory("all");
    setTabValue(newValue);
  };

  useEffect(() => {
    if (state) {
      const { category: newCategory, subcategory: newSubcategory } = state;
      const categoryKeys = Object.keys(subcategories);
      const tabIndex = categoryKeys.indexOf(newCategory);
      if (tabIndex !== -1) {
        setTabValue(tabIndex);
        setCategory(newCategory);
        setSubcategory(newSubcategory || "all");
      }
    }
  }, [state]);

  // Fetch products based on selected category, subcategory, and sorting
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const subcategoryParam = subcategory !== "all" ? `&subcategory=${subcategory}` : "";
        const sortParam = lowToHigh ? "&lowtohigh=true" : "&lowtohigh=false";
        const response = await axios.get(`${ENDPOINT}/products?category=${category}${subcategoryParam}${sortParam}&page=1&limit=10`);
        setProducts(response.data.data); 
        console.log(response.data.data);  // Log fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, subcategory, lowToHigh]); // Removed `products` from dependencies

  return (
    <div className="product_page_wrapper">
      {/* Tabs for Categories */}
      <div className="tabs-container">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "#007bff", height: "4px" },
          }}
        >
          {Object.keys(subcategories).map((cat, index) => (
            <Tab
              key={index}
              label={cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
              style={{
                color: tabValue === index ? "#007bff" : "#000",
                fontWeight: tabValue === index ? "bold" : "normal",
              }}
            />
          ))}
        </Tabs>
      </div>

      {/* Display selected category and subcategories */}
      <div className="nested-content">
        <h2>Category: {category}</h2>
        <h3>Subcategory: {subcategory}</h3>

        {/* Render subcategories inside a Swiper */}
        <div className="subcategory-container">
          <Swiper
            className="mySwiper"
            spaceBetween={5}
            slidesPerView={"auto"}
          >
            {subcategories[category]?.map((subcat, index) => (
              <SwiperSlide style={{ width: "auto" }} key={index}>
                <button
                  className={`subcategory-button ${subcat.toLowerCase() === subcategory ? "active" : ""}`}
                  onClick={() => setSubcategory(subcat.toLowerCase())}
                >
                  {subcat}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Sorting Button */}
        <button onClick={() => setLowToHigh((prev) => !prev)}>
          Sort by Price: {lowToHigh ? "Low to High" : "High to Low"}
        </button>

        {/* Loading state */}
        {loading ? (
          <div style={{height:"100vh",width:'100%',display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress/>
          </div>
        ) : (
          <div style={{minHeight:"100vh"}}>
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id}>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              ))
            ) : (
              <div style={{height:"100vh",width:'100%',display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p>No products found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
