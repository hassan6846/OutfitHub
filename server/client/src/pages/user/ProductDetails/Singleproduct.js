import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// SWIPPER

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
// components
import { useLocation, useNavigate } from 'react-router-dom';

import TrendingCarsoul from '../../../components/TrendingSlider/TrendingCarsoul';
import Cathead from '../../../components/CatalogueHeading/Catalogue_Heading';
import Faq from "react-faq-component"
import Breadcrumb from "../../../Layouts/BreadCrumb/BreadCrumb"
// css

import './Singleproduct.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { blinkSVG } from '../../../helpers/GlobalVariables';
//lazy loading component
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slug from '../../../helpers/Slugify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../Slices/CartSlice';
import toast from 'react-hot-toast';
//state

const Singleproduct = () => {
  const [mockimg, setmockimg] = useState([])
  const [descrption,setdescription]=useState("")
  const dispatch = useDispatch()
  const roles = useSelector((state) => state.user.role);
  const isAdmin = roles.includes('admin');
  const cartProducts = useSelector((state) => state.cart.products);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state; // Access the passed item via location.state

  useEffect(() => {

    const productExists = cartProducts.some((item) => item._id === product._id);
    setIsInCart(productExists);
    setmockimg(product.image)
    setdescription(product.description)
    if (!product) {
      navigate('/404', { replace: false });
      return null; // Ensure the component doesn't render further
    }
  }, [product, cartProducts, navigate])

  const handleCartToggle = () => {


    if (isInCart) {
      dispatch(removeFromCart({ id: product._id }));
      toast('Removed from Cart', {
        icon: '😥',
      });
    } if (isAdmin) {
      toast('Admin action detected! 😳', {
        icon: '🧐',
      });
    }


    else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      toast('Added to liked item!', {
        icon: '🎉',
      });
    }
    setIsInCart(!isInCart);
  };

  const faqdata = {
    title: "",
    rows: [
      {
        title: `PRODUCT DESCRIPTION`,
        content: `   <ol> 
      <li> ${descrption}</li>

      </ol>`
      },]
  }
  const OpenConfig = {
    animate: true,
    tabFocus: true,
    openOnload: 0
  }
  //params

  return (
    <>


      <Breadcrumb />
      <section className='single_product_page_container'>
        <div className='single_wrapper_80'>
          <div className='images_overflow_single'>
            <div className='container_desktop_images_preview'>
              {product.image.map((imageUrl, index) => (
                <LazyLoadImage delayTime="1" width="48%" loading="lazy" effect="blur" className='single_images_shop' key={index} src={imageUrl} alt="product_imgs" />
              ))}
            </div>
            {/* MOBILE PREVIEW SLIDES PRODUCT NEEDED TO ADD LOADER */}
            <Swiper pagination={true} modules={[Pagination]} className='swiper_main_all' >
              {mockimg.map((imageUrl, index) => (
                <SwiperSlide className='Slide_shop'>
                  <LazyLoadImage effect='blur' className='single_images_shop' key={index} src={imageUrl} alt="Product_img" /></SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Flexbox for product details */}
          <div className='Single_product_details'>
          <p className='product_name_single'>{product.brand}</p>
            <p className='product_name_single'>{product.name}</p>
            <p className='product_full_single'>{product.description}</p>
            <p className='product_id_single'>ID : {product._id}</p>
            <p className='single_price_page'><span className='price_before_single'>Rs {product.RegularPrice}</span> <span className='price_after_single'>Rs {product.SalePrice}</span><span className='discount_percentage_single'>{(!isNaN(parseFloat(product.RegularPrice)) && !isNaN(parseFloat(product.SalePrice))) 
  ? Math.floor(((parseFloat(product.RegularPrice) - parseFloat(product.SalePrice)) / parseFloat(product.RegularPrice)) * 100)
  : 0}
% off</span></p>
            <p className='flash_few'>Only few left in Stock!</p>
            <p className='flash_Text_p_yellow'>Sale is <span className='flash_Text_p_yellow_span'>Live <img style={{ height: "10px" }} alt='blink_img' src={blinkSVG} /></span></p>
            <div className='button_flex_single'>
              <MDBBtn className='single_cart_btn' disabled={isAdmin} onClick={handleCartToggle} style={{ backgroundColor: "#4BB497", width: "40%" }}>

                {isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
              </MDBBtn>

            </div>
            {/* flex */}
            <div className='icon_delivery_time'>
              <p className='delivery_time_heading'>Delivery Time:</p>
              <p className='delivery_estimate'>Lahore, Rawalpindi, Islamabad: 1-2 days</p>
              <p className='delivery_estimate'>Other cities: 1-4 days</p>
            </div>

            <Faq config={OpenConfig} data={faqdata} />
            {/* links */}
            <div className='category_links_single_page'>
              <p className='delivery_time_heading'>#Tags</p>
              <div className='category_links_tags_flex'>
                {
                  product.tags && product.tags.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <Link

                        to={`/shop/tags/${Slug(tag)}`}
                        key={index} className='single_button_tag'>
                        {tag}
                      </Link>
                    ))
                  ) : (
                    <p>No tags available</p> // Optional fallback if no tags exist
                  )
                }
              </div>

            </div>
          </div>
        </div>
      </section>
      <Cathead display="none" heading="Recomendations &bull;" />
      <TrendingCarsoul margin="20px" />

    </>
  );
};

export default Singleproduct;
