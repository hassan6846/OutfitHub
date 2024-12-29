import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CircularProgress from '@mui/material/CircularProgress';

// Components
import Breadcrumb from '../../../Layouts/BreadCrumb/BreadCrumb';
import TrendingCarsoul from '../../../components/TrendingSlider/TrendingCarsoul';
import Cathead from '../../../components/CatalogueHeading/Catalogue_Heading';
import Faq from 'react-faq-component';
// CSS
import './Singleproduct.css';
// MDB Button
import { MDBBtn } from 'mdb-react-ui-kit';
// Helpers

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slug from '../../../helpers/Slugify';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../Slices/CartSlice';
// Toast
import toast from 'react-hot-toast';
// API Endpoint
import axios from 'axios';
import { ENDPOINT } from '../../../api/Endpoint';

const Singleproduct = () => {
  const [data, setData] = useState(null); // Product data
  const [loading, setLoading] = useState(true); // Loading state set to true initially
  const [isInCart, setIsInCart] = useState(false);

  const dispatch = useDispatch();
  const roles = useSelector((state) => state.user.role);
  const isAdmin = roles.includes('admin');
  const cartProducts = useSelector((state) => state.cart.products);

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state; // Access the passed item via location.state

  useEffect(() => {
    if (!product) {
      navigate('/404', { replace: true });
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/product/${product._id}`, {
          headers: { 'Content-Type': 'application/json' },
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProduct();
  }, [product, navigate]);

  useEffect(() => {
    if (data) {
      const productExists = cartProducts.some((item) => item._id === data._id);
      setIsInCart(productExists);
    }
  }, [data, cartProducts]);

  const handleCartToggle = () => {
    if (isAdmin) {
      toast('Admin action detected! 😳', { icon: '🧐' });
      return;
    }

    if (isInCart) {
      dispatch(removeFromCart({ id: data._id }));
      toast('Removed from Cart', { icon: '😥' });
    } else {
      dispatch(addToCart({ ...data, quantity: 1 }));
      toast('Added to Cart!', { icon: '🎉' });
    }

    setIsInCart(!isInCart);
  };

  const faqData = {
    title: '',
    rows: [
      {
        title: 'PRODUCT DESCRIPTION',
        content: `<ol><li>${data?.description || 'No description available.'}</li></ol>`,
      },
    ],
  };

  const faqConfig = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
        <CircularProgress />
      </div>
    );
  }

  if (!data) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Breadcrumb />
      <section className="single_product_page_container">
        <div className="single_wrapper_80">
          {/* Images */}
          <div className="images_overflow_single">
            <div className="container_desktop_images_preview">
              {data.image?.map((imageUrl, index) => (
                <LazyLoadImage
                  key={index}
                  delayTime="1"
                  width="48%"
                  loading="lazy"
                  effect="blur"
                  className="single_images_shop"
                  src={imageUrl}
                  alt={`product_img_${index}`}
                />
              ))}
            </div>
            <Swiper pagination={true} modules={[Pagination]} className="swiper_main_all">
              {data.image?.map((imageUrl, index) => (
                <SwiperSlide key={index} className="Slide_shop">
                  <LazyLoadImage effect="blur" className="single_images_shop" src={imageUrl} alt={`Product_img_${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Product Details */}
          <div className="Single_product_details">
            <p className="product_name_single">{data.brand}</p>
            <p className="product_name_single">{data.name}</p>
            <p className="product_full_single">{data.description}</p>
            <p className="product_id_single">ID: {data._id}</p>
            <p className="single_price_page">
              <span className="price_before_single">Rs {data.RegularPrice}</span>
              <span className="price_after_single">Rs {data.SalePrice}</span>
              <span className="discount_percentage_single">
                {data.RegularPrice && data.SalePrice
                  ? Math.floor(((data.RegularPrice - data.SalePrice) / data.RegularPrice) * 100)
                  : 0}
                % off
              </span>
            </p>
            <MDBBtn
              className="single_cart_btn"
              disabled={isAdmin}
              onClick={handleCartToggle}
              style={{ backgroundColor: '#4BB497', width: '40%' }}
            >
              {isInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
            </MDBBtn>
            <Faq config={faqConfig} data={faqData} />
            <div className="category_links_single_page">
              <p className="delivery_time_heading">#Tags</p>
              <div className="category_links_tags_flex">
                {data.tags?.length > 0 ? (
                  data.tags.map((tag, index) => (
                    <Link key={index} to={`/shop/tags/${Slug(tag)}`} className="single_button_tag">
                      {tag}
                    </Link>
                  ))
                ) : (
                  <p>No tags available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cathead display="none" heading="Recommendations &bull;" />
      <TrendingCarsoul margin="20px" />
    </>
  );
};

export default Singleproduct;
