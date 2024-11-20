import React, { useState } from 'react';
import { Tab, Tabs, Chip, Avatar, Box, Divider } from '@mui/material';


const ProductCategories = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Active tab index
  const [selectedChip, setSelectedChip] = useState(0); // Active chip inside each tab

  // Sample category data for each tab (Men, Women, Girls, Kids, New Arrivals)
  const categories = [
    { label: 'Men', subCategories: ['Clothing', 'Footwear', 'Accessories','Accessories','Accessories','Accessories','Accessories'] },
    { label: 'Women', subCategories: ['Clothing', 'Footwear', 'Beauty'] },
    { label: 'Girls', subCategories: ['Clothing', 'Footwear', 'Toys'] },
    { label: 'Kids', subCategories: ['Clothing', 'Toys', 'Accessories'] },
    { label: 'New Arrivals', subCategories: ['Clothing', 'Footwear', 'Beauty'] },
  ];

  // Handle tab change
  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
    setSelectedChip(0); // Reset selected chip when tab changes
  };

  // Handle chip selection
  const handleChipClick = (chipIndex) => {
    setSelectedChip(chipIndex);
    console.log(`Selected Tab: ${categories[selectedTab].label}`);
    console.log(`Selected Chip: ${categories[selectedTab].subCategories[chipIndex]}`);
  };

  return (
    <Box 
    style={{flexDirection:"column",justifyContent: "center", alignItems: "center", display: "flex"}}
    >
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Product Categories"
        centered
     style={{fontFamily:"Outfit', sans-serif",fontSize:"14px"}}
        variant="scrollable"
      >
        {categories.map((category, index) => (
          <Tab style={{fontSize:"12px",fontFamily:"Outfit', sans-serif"}} label={category.label} key={index} />
        ))}
      </Tabs>
  
      {/* Display subcategories (Chips) */}
      <Box sx={{ padding: 2 ,width:"100%"}}>
      <Divider style={{marginBottom:"10px"}}/>
        <Box sx={{ display: 'flex', gap: 2 ,overflowX:"auto"}}>
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
