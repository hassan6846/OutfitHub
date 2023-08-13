import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryBar.css';
import 'swiper/css';

const products = [
  {
    id: 1,
    category: "men",
    product: "Ben sharpio"
  },
  {
    id: 2,
    category: "women",
    product: "Ben cart"
  },
  {
    id: 3,
    category: "women",
    product: "Ben das"
  },
  {
    id: 4,
    category: "women",
    product: "Ben das"
  },
  {
    id: 5,
    category: "women",
    product: "Ben a"
  },
  {
    id: 6,
    category: "women",
    product: "Ben ds"
  },
  {
    id: 7,
    category: "men",
    product: "Ben w"
  },
  {
    id: 8,
    category: "men",
    product: "Ben sharpio"
  },
  {
    id: 9,
    category: "men",
    product: "Ben as"
  },
  {
    id: 10,
    category: "men",
    product: "Ben sd"
  }
];

const CategoryBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

  const menSubcategories = [...new Set(products.filter(product => product.category === 'men').map(product => product.subcategory))];

  return (
    <div className='cat_cont'>
      <div className='category_wrapper'>
        <Link className={`cat_link ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => handleCategoryClick('all')}>All</Link>
        <Link className={`cat_link ${selectedCategory === 'men' ? 'active' : ''}`} onClick={() => handleCategoryClick('men')}>Men</Link>
        {menSubcategories.map(subcategory => (
          <Link key={subcategory} className={`cat_link ${selectedCategory === subcategory ? 'active' : ''}`} onClick={() => handleCategoryClick(subcategory)}>{subcategory}</Link>
        ))}
        {/* Add more category links as needed */}
      </div>
      <div className='category_items_slider'>
        <div className='product_item all_products'>
          <button onClick={() => handleCategoryClick('all')}>Show All</button>
        </div>
        {filteredProducts.map(product => (
          <div key={product.id} className='product_item'>
            {product.product}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
