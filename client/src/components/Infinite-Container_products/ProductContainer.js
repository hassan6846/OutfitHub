import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Chip, Avatar, Box, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ProductCategories = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChip, setSelectedChip] = useState(0);

  const categories = [
    { label: 'Men', subCategories: ['All', 'Footwear', 'Accessories', 'Accessories', 'Accessories', 'Accessories'] },
    { label: 'Women', subCategories: ['All', 'Footwear', 'Beauty'] },
    { label: 'Girls', subCategories: ['All', 'Footwear', 'Toys'] },
    { label: 'Kids', subCategories: ['All', 'Toys', 'Accessories'] },
    { label: 'New Arrivals', subCategories: ['All', 'Footwear', 'Beauty'] },
  ];

  const [categoryData, setCategoryData] = useState({ label: 'Men', subCategories: ['All'] });

  useEffect(() => {
    const data = location.state;
    if (data) {
 
      const { label, subCategories } = data[0];
      const categoryIndex = categories.findIndex((category) => category.label.toLowerCase() === label.toLowerCase());

      if (categoryIndex >= 0) {
        setCategoryData({
          label,
          subCategories: subCategories && subCategories.length > 0 ? subCategories : ['All'],
        });
        setSelectedTab(categoryIndex);


        if (subCategories && subCategories.length > 0) {
          const validSubCategory = categories[categoryIndex].subCategories.find(subCategory => subCategories.includes(subCategory));
          setSelectedChip(validSubCategory ? categories[categoryIndex].subCategories.indexOf(validSubCategory) : 0);
        } else {
          setSelectedChip(0); 
        }

        console.log("Selected Category from URL:", label);
        console.log("Selected SubCategories from URL:", subCategories);
      }
    } else {

      console.log("Using default category and subcategory.");
    }
  }, [location.state]);

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
    setSelectedChip(0);
  };

  // Handle chip selection
  const handleChipClick = (chipIndex) => {
    setSelectedChip(chipIndex);
    console.log(`Selected Tab: ${categories[selectedTab].label}`);
    console.log(`Selected Chip: ${categories[selectedTab].subCategories[chipIndex]}`);
  };

  return (
    <Box style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Product Categories"
        centered
        style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px' }}
        variant="scrollable"
      >
        {categories.map((category, index) => (
          <Tab
            style={{ fontSize: '12px', fontFamily: "'Outfit', sans-serif" }}
            label={category.label}
            key={index}
          />
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
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCategories;
