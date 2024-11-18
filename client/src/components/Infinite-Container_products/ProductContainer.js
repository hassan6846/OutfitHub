import React, { useState } from 'react';
import { Tab, Tabs, Chip, Avatar, Box, Typography } from '@mui/material';
import { useEffect } from 'react';

const ProductCategories = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Active tab index
  const [selectedChip, setSelectedChip] = useState(0); // Active chip inside each tab

  // Sample category data for each tab (Men, Women, Girls, Kids, New Arrivals)
  const categories = [
    { label: 'Men', subCategories: ['Clothing', 'Footwear', 'Accessories'] },
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
    <Box>
      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Product Categories"
        centered

          variant="scrollable"
      >
        {categories.map((category, index) => (
          <Tab label={category.label} key={index} />
        ))}
      </Tabs>

      {/* Display subcategories (Chips) */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {categories[selectedTab].label} Categories
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
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
