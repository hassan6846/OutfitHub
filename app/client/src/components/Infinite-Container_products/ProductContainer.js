import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Chip, Avatar, Box, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from "axios";
import { ENDPOINT } from "../../api/Endpoint";
import ProductCard from '../Card/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromLiked, addtoLiked } from '../../Slices/LikedSlice';
import Slug from '../../helpers/Slugify';
import "./ProductContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';

const ProductCategories = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.like.products);
  const location = useLocation();
  const [loading, setloading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChip, setSelectedChip] = useState(0);
  const [categoryLabel, setCategoryLabel] = useState('Men'); // separate state for label
  const [subcategory, setSubcategory] = useState('All'); // separate state for subcategory
  const [data, setData] = useState([]); // This will store the fetched product data
  const [page, setPage] = useState(1); // State to track the current page
  const [hasMore, setHasMore] = useState(true); // To track if there are more products
  const state = location.state;

  // Static categories data
  const categories = [
    { label: 'Men', subCategories: ['All', 'Casual', 'Trousers', 'Sports', 'T-Shirts', 'Casual-Shirts'] },
    { label: 'Women', subCategories: ['All', 'Tops', 'Kurta', 'Sleepwear', 'Makeup', 'Bottoms', 'Pumps', 'Sneakers', 'Lawn', 'Dresses', 'Handbags', 'Shalwar-Kameez'] },
    { label: 'Girls', subCategories: ['All', 'Footwear', 'Toys', 'Clothing'] },
    { label: 'Kids', subCategories: ['All', 'Toys', 'Clothing'] },
  ];

  // Fetch product data based on categoryLabel and subcategory
  const fetchProduct = async () => {
    const limit = 10;
    const currentPage = page;
    const category = categoryLabel.toLowerCase();
    const subcategoryQuery = subcategory === 'All' ? "" : subcategory; // Do not pass anything for 'All'

    try {
      setloading(true);
      const response = await axios.get(`${ENDPOINT}/products?subcategory=${subcategoryQuery}&category=${category}&page=${currentPage}&limit=${limit}&lowtohigh=true`);

      if (response.data.data.length === 0) {
        setHasMore(false);
        toast.success("You've reached the end! 😢");
      } else {
        setData((prevData) => [...prevData, ...response.data.data]); // Appends new data
        setPage(currentPage + 1); // Increment page for next fetch
      }
    } catch (error) {
      console.log(error);
      toast.error("Error While Fetching Products");
    } finally {
      setloading(false);
    }
  };

  // Effect for setting category data based on location state
  useEffect(() => {
    const stateData = state && state[0] ? state[0] : null;

    if (stateData) {
      const { label, subCategories } = stateData;
      const categoryIndex = categories.findIndex((category) => category.label.toLowerCase() === label.toLowerCase());

      if (categoryIndex >= 0) {
        setCategoryLabel(label);
        setSubcategory(subCategories && subCategories.length > 0 ? subCategories[0] : 'All'); // Default to first subcategory
        setSelectedTab(categoryIndex);

        const validSubCategory = categories[categoryIndex].subCategories.find(subCategory => subCategories.includes(subCategory));
        setSelectedChip(validSubCategory ? categories[categoryIndex].subCategories.indexOf(validSubCategory) : 0);
      }
    } else {
      // Default category (Men, All)
      setCategoryLabel('Men');
      setSubcategory('All');
    }
  }, [state]);

  // Effect for fetching products whenever categoryLabel or subcategory changes
  useEffect(() => {
    setData([]);
    setPage(1); // Reset page to 1
    setHasMore(true); // Reset hasMore to true
    fetchProduct(); // Fetch products for the selected category/subcategory
  }, [categoryLabel, subcategory]);

  // Handle like/unlike action for a product
  const handleLikeToggle = (product) => {
    const isLiked = liked.some((item) => item._id === product._id);

    if (isLiked) {
      dispatch(removeFromLiked(product));
      toast('Removed from Liked item!', { icon: '😥' });
    } else {
      dispatch(addtoLiked(product));
      toast('Added to liked item!', { icon: '🎉' });
    }
  };

  // Handle tab change (category switch)
  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
    setCategoryLabel(categories[newTab].label); // Update categoryLabel based on selected tab
    setSubcategory('All'); // Reset subcategory to 'All' on tab change
  };

  // Handle chip click (subcategory selection)
  const handleChipClick = (chipIndex) => {
    const selectedSubCategory = categories[selectedTab].subCategories[chipIndex];
    setSelectedChip(chipIndex);

    // Update subcategory based on the selected chip (subcategory)
    setSubcategory(selectedSubCategory === 'All' ? 'All' : selectedSubCategory);
  };

  // Handle infinite scroll and load more products
  const ReachEnd = () => {
    console.log("Reached the end of the list");
    if (!hasMore) {
      console.log("No more products to load");
    } else {
      fetchProduct(); // Load next batch of products
    }
  };

  return (
    <>
      <Box style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Product Categories"
          centered
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px' }}
        >
          {categories.map((category, index) => (
            <Tab
              style={{ fontSize: '12px', fontFamily: "'Outfit', sans-serif" }}
              label={category.label}
              key={index} />
          ))}
        </Tabs>

        {/* Display subcategories (Chips) */}
        <Box sx={{ padding: 2, width: '100%' }}>
          <Divider style={{ marginBottom: '10px' }} />
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
            {categories[selectedTab].subCategories.map((subCategory, index) => (
              <Chip
                key={index}
                label={subCategory}
                avatar={<Avatar>{subCategory.charAt(0)}</Avatar>}
                clickable
                color={selectedChip === index ? 'primary' : 'default'}
                onClick={() => handleChipClick(index)}
                sx={{ cursor: 'pointer' }} />
            ))}
          </Box>
        </Box>
      </Box>
      {loading && (
        <div style={{ height: "80vh", width: "100%", justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <CircularProgress />
        </div>
      )}
      {/* Display fetched product data */}
      <div>
        {data && data.length > 0 ? (
          <InfiniteScroll
            next={ReachEnd}
            hasMore={hasMore}
            refreshFunction={fetchProduct}
            dataLength={data.length}
            pullDownToRefreshThreshold={0.8}
            pullDownToRefresh={true}
            className="flex-Container-Infiite"
          >
            {data.map((product, index) => (
              <ProductCard
                key={product._id}
                saved={((parseFloat(product.RegularPrice) - parseFloat(product.SalePrice)) / parseFloat(product.RegularPrice)) * 100}
                orignalPrice={product.RegularPrice}
                salePrice={product.SalePrice}
                state={product}
                tagoneLink={`/shop/tags/${Slug(product.tags[0] || '')}`}
                iconClick={() => handleLikeToggle(product)}
                tagtwoLink={`/shop/tags/${Slug(product.tags[1] || '')}`}
                tagthreelink={`/shop/tags/${Slug(product.tags[2] || '')}`}
                tagone={product.tags[0] || ''}
                tagtwo={product.tags[1] || ''}
                tagsthree={product.tags[2] || ''}
                isChecked={liked.some((likedProduct) => likedProduct._id === product._id)}
                to={`/shop/${Slug(product.name)}`}
                name={product.name}
                image={product.image[0]}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <div style={{ height: "90vh", width: "100%", display: "flex", justifyContent: "center" }}>
            <p>No products available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCategories;
