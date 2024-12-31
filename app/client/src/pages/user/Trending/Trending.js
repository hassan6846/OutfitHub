import axios from "axios";
import { useEffect, useState } from "react";
import "./Trending.css";
import { ENDPOINT } from "../../../api/Endpoint";
import Slug from "../../../helpers/Slugify";
import ProductCard from "../../../components/Card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addtoLiked, removeFromLiked } from "../../../Slices/LikedSlice";
import toast from "react-hot-toast";
import CircularProgress from '@mui/material/CircularProgress';

import BreadCrumb from "../../../Layouts/BreadCrumb/BreadCrumb";

const Trending = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.like.products);
  const [product, setProducts] = useState([]);


  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ENDPOINT}/products/promotions/trending`);
        setProducts(response.data.product);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Error while fetching products.");
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  const handleLikeToggle = (product) => {
    const isLiked = liked.some((item) => item._id === product._id);

    if (isLiked) {
      dispatch(removeFromLiked(product));
      toast('Removed from liked items!', { icon: '😥' });
    } else {
      dispatch(addtoLiked(product));
      toast('Added to liked items!', { icon: '🎉' });
    }
  };

  return (
    <section className="Trending_Page">
      <BreadCrumb />
      {loading ? (
        <div style={{height:"100vh",width:"100%",display:'flex',justifyContent:"center",alignItems:'center'}} className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="Trending_Page_Container">
          {product.map((product, index) => (
            <ProductCard
              saved={Math.floor(((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100)}
              state={product}
              key={index}
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
        </div>
      )}
    </section>
  );
};

export default Trending;
