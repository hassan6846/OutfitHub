import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// css
import "./search.css";
// Components.
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb';
import ProductCard from '../../../components/Card/ProductCard';
import Slug from '../../../helpers/Slugify';

const Search = () => {
  const { state } = useLocation();
  const { query } = useParams();
  const navigate = useNavigate();

  const handleLikeToggle = (product) => {
    // Handle the like/unlike logic here
    console.log('Toggled like for:', product);
  };

  useEffect(() => {
    if (!query) {
      navigate('/404');
    }
    console.log("Query:", query);
    console.log("State Products:", state?.products);
  }, [query, navigate, state]);

  return (
    <>
      <BreadCrumb />
      <div className="search-results-container">
        {state?.products?.length > 0 ? (
          <div className="product-grid">
            {state.products.map((product) => (
              <ProductCard
                key={product._id}
                orignalPrice={product.RegularPrice}
                salePrice={product.SalePrice}
                saved={Math.floor(
                  ((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100
                )}
                state={product}
                tagoneLink={`/shop/tags/${Slug(product.tags[0] || "")}`}
                tagtwoLink={`/shop/tags/${Slug(product.tags[1] || "")}`}
                tagthreelink={`/shop/tags/${Slug(product.tags[2] || "")}`}
                tagone={product.tags[0] || ""}
                tagtwo={product.tags[1] || ""}
                tagsthree={product.tags[2] || ""}
                isChecked={state.liked?.some(
                  (likedProduct) => likedProduct._id === product._id
                )}
                to={`/shop/${Slug(product.name)}`}
                name={product.name}
                image={product.image[0]}
                iconClick={() => handleLikeToggle(product)}
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
