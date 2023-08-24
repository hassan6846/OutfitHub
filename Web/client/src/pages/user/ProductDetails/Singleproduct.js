import React, { useEffect, useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const { title } = useParams(); // Extract title parameter
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [productExists, setProductExists] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.status === 200) {
          const data = await response.json();
          setProductData(data);

          // Check if the requested product title exists in the data
          const product = data.products.find(product => product.title === title);
          if (!product) {
            setProductExists(false);
          }
          setLoading(false); // Data fetched, loading complete
        } else if (response.status === 404) {
          setLoading(false); // Loading complete even if 404
          navigate('/404');
        }
      } catch (error) {
        setLoading(false); // Loading complete on error
        console.error('Error fetching products:', error);
      }
    };

    fetchProduct();
  }, [title, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productExists) {
    navigate('/404');
    return null;
  }

  // Find the product based on the URL parameter
  const product = productData.products.find(product => product.title === title);

  return (
    <div>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.stock}</p>
          <p style={{ textDecoration: "line-through", color: "red" }}>{product.price}</p>
          {/* Render other product details here */}
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
