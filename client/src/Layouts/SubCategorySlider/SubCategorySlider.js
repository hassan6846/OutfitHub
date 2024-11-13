import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './SubCategorySlider.css';

const SubCategorySlider = () => {
  const [data, saveData] = useState([]);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Fetch product data
  const fetchProductData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        saveData(json.products);
      });
  };

  // Call fetchProductData when component is loaded
  useEffect(() => {
    fetchProductData();
  }, []);

  console.log('data:', data); // Check the value of data

  // Get unique categories
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const handleScrollLeft = () => {
    const container = document.getElementById('sliderContainer');
    container.scrollLeft -= container.offsetWidth;
    setScrollOffset(container.scrollLeft);
  };

  const handleScrollRight = () => {
    const container = document.getElementById('sliderContainer');
    container.scrollLeft += container.offsetWidth;
    setScrollOffset(container.scrollLeft);
  };

  return (
    <div className="slider_wrapper_100 Motion-carsoul">
      <div className="slider_wrapper_90 inner-Carsoul">
        <motion.div
          id="sliderContainer"
          dragConstraints={{ right: 0, left: 0 }}
          drag="x"
          className="slider_container"
        >
          {/* Map the data */}
          {uniqueCategories.map((category) => {
            const filteredItems = data.filter((item) => item.category === category);
            const firstItem = filteredItems[0];
            return (
              <Link className="subCategoryBtn" key={firstItem.id}>
                <img src={firstItem.images[2]} className="SubCat-Img" alt="img-of-subCat" />
                <Link className="Sub_Link" to="/">
                  {firstItem.category}
                </Link>
              </Link>
            );
          })}
          {/* Mapping ends here */}
        </motion.div>
      </div>
      {/* Add buttons for scrolling */}
      {scrollOffset > 0 && (
        <button className="scrollButton scrollButton-left" onClick={handleScrollLeft}>
          &lt;
        </button>
      )}
      {scrollOffset < document.getElementById('sliderContainer')?.scrollWidth - document.getElementById('sliderContainer')?.offsetWidth && (
        <button className="scrollButton scrollButton-right" onClick={handleScrollRight}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default SubCategorySlider;
