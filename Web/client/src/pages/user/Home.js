import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      category: 'men',
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      category: 'women',
      image: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      category: 'kids',
      image: 'https://example.com/product3.jpg',
    },
    // Add more products with categories
  ];

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const isMatchedCategory = selectedCategory ? product.category === selectedCategory : true;
    const isMatchedSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return isMatchedCategory && isMatchedSearch;
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '10px' }}>
            <Link to="/products?category=men" onClick={() => handleCategoryClick('men')}>Men</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/products?category=women" onClick={() => handleCategoryClick('women')}>Women</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/products?category=kids" onClick={() => handleCategoryClick('kids')}>Kids</Link>
          </li>
          {/* Add more category links */}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/cart" style={{ marginRight: '10px', textDecoration: 'none' }}>
            <button style={{ padding: '5px 10px' }}>Shopping Cart</button>
          </Link>
          <form style={{ display: 'flex' }}>
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} style={{ marginRight: '10px', padding: '5px' }} />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <button style={{ marginRight: '10px' }}>Add to Cart</button>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
