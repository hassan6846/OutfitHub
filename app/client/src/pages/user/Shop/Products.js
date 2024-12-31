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
import ProductCard from "../../../components/Card/ProductCard";
import Slug from "../../../helpers/Slugify";


import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addtoLiked, removeFromLiked } from "../../../Slices/LikedSlice";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.like.products);

  const [category, setCategory] = useState("men");
  const [subcategory, setSubcategory] = useState("all");
  const [tabValue, setTabValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false); // Sorting state
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleTabChange = (event, newValue) => {
    const categoryKeys = Object.keys(subcategories);
    const selectedCategory = categoryKeys[newValue];
    setCategory(selectedCategory);
    setSubcategory("all");
    setTabValue(newValue);
    setPage(1); // Reset page when category changes
    setProducts([]); // Reset products when category changes
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

  const fetchProducts = async (currentPage = 1) => {
    setLoading(true);
    try {
      const subcategoryParam = subcategory !== "all" ? `&subcategory=${subcategory}` : "";
      const sortParam = lowToHigh ? "&lowtohigh=true" : "&lowtohigh=false";
      const response = await axios.get(
        `${ENDPOINT}/products?category=${category}${subcategoryParam}${sortParam}&page=${currentPage}&limit=10`
      );

      const newProducts = response.data.data;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(newProducts.length > 0); // Disable infinite scroll if no more data
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProducts([]); // Reset products on category/subcategory change
    setPage(1); // Reset page
    fetchProducts(1); // Fetch the first page
    // eslint-disable-next-line
  }, [category, subcategory, lowToHigh]);

  const loadMoreProducts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  const handleLikeToggle = (product) => {
    const isLiked = liked.some((item) => item._id === product._id);
    if (isLiked) {
      dispatch(removeFromLiked(product));
      toast("Removed from Liked item!", { icon: "😥" });
    } else {
      dispatch(addtoLiked(product));
      toast("Added to liked item!", { icon: "🎉" });
    }
  };

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
          <Swiper className="mySwiper" spaceBetween={5} slidesPerView={"auto"}>
            {subcategories[category]?.map((subcat, index) => (
              <SwiperSlide style={{ width: "auto" }} key={index}>
                <button
                  className={`subcategory-button ${subcat.toLowerCase() === subcategory ? "active" : ""
                    }`}
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
        {loading && page === 1 ? (
          <div
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={products.length}
            next={loadMoreProducts}
            hasMore={hasMore}
            loader={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px 0",
                }}
              >
                <CircularProgress />
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You have Reached to the End </b>
              </p>
            }
          >
            <div style={{ minHeight: "100vh",display:'flex',flexWrap:"wrap",justifyContent:'center',alignItems:"center" ,rowGap:10,columnGap:10}}>
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product._id}
                    orignalPrice={product.RegularPrice}
                    salePrice={product.SalePrice}
                    saved={Math.floor(
                      ((Number(product.RegularPrice) -
                        Number(product.SalePrice)) /
                        Number(product.RegularPrice)) *
                      100
                    )}
                    state={product}
                    tagoneLink={`/shop/tags/${Slug(product.tags[0] || "")}`}
                    iconClick={() => handleLikeToggle(product)}
                    tagtwoLink={`/shop/tags/${Slug(product.tags[1] || "")}`}
                    tagthreelink={`/shop/tags/${Slug(product.tags[2] || "")}`}
                    tagone={product.tags[0] || ""}
                    tagtwo={product.tags[1] || ""}
                    tagsthree={product.tags[2] || ""}
                    isChecked={liked.some(
                      (likedProduct) => likedProduct._id === product._id
                    )}
                    to={`/shop/${Slug(product.name)}`}
                    name={product.name}
                    image={product.image[0]}
                  />
                ))
              ) : (
                <div
                  style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>No products found</p>
                </div>
              )}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Products;

