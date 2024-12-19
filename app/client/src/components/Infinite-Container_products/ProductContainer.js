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
import "./ProductContainer.css"
import InfiniteScroll from "react-infinite-scroll-component"

const ProductCategories = () => {

  const dispatch = useDispatch()
  const liked = useSelector((state) => state.like.products);
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChip, setSelectedChip] = useState(0);
  const [categoryData, setCategoryData] = useState({ label: 'Men', subCategories: ['All'] });
  const [data, setData] = useState([]);  // This will store the fetched product data
  const [page, setPage] = useState(1);  // 📝 State to track the current page
  const [hasMore, setHasMore] = useState(true);  // 📝 To track if there are more products

  // Static categories data (no need for useMemo)
  const categories = [
    { label: 'Men', subCategories: ['All', 'Casual', 'Trousers', 'Sports', 'T-Shirts', 'Casual-Shirts'] },
    { label: 'Women', subCategories: ['All', 'Tops', 'Kurta', 'Sleepwear', 'Makeup', 'Bottoms', 'Pumps', 'Sneakers', 'Lawn', 'Dresses', 'Handbags', 'Shalwar-Kameez'] },
    { label: 'Girls', subCategories: ['All', 'Footwear', 'Toys', 'Clothing'] },
    { label: 'Kids', subCategories: ['All', 'Toys', 'Clothing'] },
  ];

  // Fetch product data based on categoryData
  const fetchProduct = async () => {
    const limit = 10;
    const currentPage = page;
    const subcategory = categoryData.subCategories.includes("All") ? "" : categoryData.subCategories.join(',');
    const category = categoryData.label.toLowerCase();

    try {
      const response = await axios.get(`${ENDPOINT}/products?subcategory=${subcategory.toLowerCase()}&category=${category}&page=${currentPage}&limit=${limit}&lowtohigh=true`);

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
    }
  };

  // Effect for setting category data based on location state
  useEffect(() => {
    const data = location.state;
    if (data) {
      const { label, subCategories } = data[0];
      const categoryIndex = categories.findIndex((category) => category.label.toLowerCase() === label.toLowerCase());

      if (categoryIndex >= 0) {
        setCategoryData({
          label,
          subCategories: subCategories.length > 0 ? subCategories : ['All'],
        });
        setSelectedTab(categoryIndex);

        const validSubCategory = categories[categoryIndex].subCategories.find(subCategory => subCategories.includes(subCategory));
        setSelectedChip(validSubCategory ? categories[categoryIndex].subCategories.indexOf(validSubCategory) : 0);
      }
    }
  }, [location.state]);

  // Effect for fetching products whenever categoryData changes (e.g., tab or subcategory)
  useEffect(() => {
    setData([]);  // Reset data when category changes
    setPage(1);   // Reset page to 1 to load new products
    setHasMore(true); // Reset hasMore to true for the new category
    fetchProduct();  // Fetch products for the selected category/subcategory
  }, [categoryData]);  // This triggers every time categoryData changes (including when tabs or chips are clicked)

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

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
    setSelectedChip(0);
    setCategoryData(categories[newTab]); // Update categoryData based on selected tab
  };

  const handleChipClick = (chipIndex) => {
    const selectedSubCategory = categories[selectedTab].subCategories[chipIndex];
    setSelectedChip(chipIndex);
  
    // Update categoryData based on the selected chip (subcategory)
    const newCategoryData = {
      ...categoryData,
      subCategories: selectedSubCategory === 'All' ? ['All'] : [selectedSubCategory],
    };
  
    // Update the state first
    setCategoryData(newCategoryData);
  
    // Fetch products immediately after state update
    setPage(1); // Reset page to 1
    setData([]); // Clear existing products
    setHasMore(true); // Reset 'hasMore' state
    fetchProduct(); // Fetch new products for the selected category/subcategory
  };

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
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default ProductCategories;
