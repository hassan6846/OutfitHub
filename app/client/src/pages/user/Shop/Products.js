import React, { useEffect, useState } from "react";

// css
import "./products.css";
// libs
import { useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components

import "swiper/css";
// Subcategories for each category
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
    'Casual Shirts',
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
    'Pumps',
    'Sneakers',
    "Shalwar kameez",
    "kurta",
    "Tops",
    'Handbags',
    "Khussa",
    "Jeans",
    "Sleepwear",
    'Bottoms',
    "Suits",
    'Makeup',
    'Dresses',
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

  // Handle category changes via tabs
  const handleTabChange = (event, newValue) => {
    const categoryKeys = Object.keys(subcategories);
    const selectedCategory = categoryKeys[newValue]; // Get category based on tab index
    setCategory(selectedCategory);
    setSubcategory("all"); // Default subcategory to "all" when category changes
    setTabValue(newValue);
  };

  // Update states when state is provided by useLocation
  useEffect(() => {
    console.log(state);
    if (state) {
      const { category: newCategory, subcategory: newSubcategory } = state;
      const categoryKeys = Object.keys(subcategories);
      const tabIndex = categoryKeys.indexOf(newCategory); // Find index of the category for Tabs
      if (tabIndex !== -1) {
        setTabValue(tabIndex);
        setCategory(newCategory);
        setSubcategory(newSubcategory || "all");
      }
    }
  }, [state]);

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
                slidesPerView={'auto'}
    

     
          >
            {subcategories[category]?.map((subcat, index) => (
              <SwiperSlide  style={{ width: "auto" }} key={index}>
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
      </div>

      {/* Loading State if the product is State or being Fetched */}
    </div>
  );
};

export default Products;
