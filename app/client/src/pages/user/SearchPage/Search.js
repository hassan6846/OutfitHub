import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// CSS
import "./search.css";
// Components.
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb';
import ProductCard from '../../../components/Card/ProductCard';
import { ENDPOINT } from '../../../api/Endpoint';
import CircularProgress from '@mui/material/CircularProgress';
//state
const Search = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State for fetched products
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Fetch search results whenever `query` changes.
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) {
        navigate('/404'); // Redirect if no query
        return;
      }

      setLoading(true); // Start loading
      setProducts([]); // Clear previous results to avoid overlap
      try {
        const response = await axios.get(`${ENDPOINT}/products?search=${query}`);
        setProducts(response.data.data || []); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, [query, navigate]); // Dependency on `query`

  return (
    <>
      <BreadCrumb />
      <div className="search-results">
        {loading ? (
          <div className="loading-container">
            <CircularProgress />
          </div>
        ) : products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                orignalPrice={product.RegularPrice}
                salePrice={product.SalePrice}
                saved={Math.floor(
                  ((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100
                )}
                state={product}
                tagoneLink={`/shop/tags/${product.tags[0] || ''}`}
                tagtwoLink={`/shop/tags/${product.tags[1] || ''}`}
                tagthreelink={`/shop/tags/${product.tags[2] || ''}`}
                tagone={product.tags[0] || ''}
                tagtwo={product.tags[1] || ''}
                tagsthree={product.tags[2] || ''}
                isChecked={false} // Adjust if liked functionality is needed
                to={`/shop/${product.name}`}
                name={product.name}
                image={product.image[0]}
              />
            ))}
          </div>
        ) : (
          <p>No products found for "{query}".</p>
        )}
      </div>
    </>
  );
};

export default Search;
