import React from 'react';
// components
import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav';
import Footer from '../../../Layouts/footer/Footer';
import Faq from "react-faq-component"

// css
import './Singleproduct.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Singleproduct = () => {
  const mockImages = [
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
    'https://shorturl.at/mJKR1',
  ];
const faqdata={
  title:"",
  rows:[
    {
      title:  `PRODUCT DESCRIPTION`,
      content: `   <ol> 
      <li> WOMEN'S MOCASSINS SOFT These Stylish Pumps By Kelly Are Designed To Go Well With Your Wardrobe, Cute And Comfortable, All Day Long </li>
      <li>  Made With Good Quality Synthetic Material Which Gives Them Durability </li>
     <li> The Shoe Features A Classic Round-Toe Design For A Simple Yet Gorgeous Look</li> </ol>`
    },]}
  return (
    <>
      <ResponsiveNav />
      <section className='single_product_page_container'>
        <div className='single_wrapper_80'>
          <div className='images_overflow_single'>
            {/* add the shitty breadcrumb here here */}
            {mockImages.map((imageUrl, index) => (
              <img className='single_images_shop' key={index} src={imageUrl} alt="product_imgs" />
            ))}
          </div>
          {/* Flexbox for product details */}
          <div className='Single_product_details'>
            <p className='product_name_single'>Kelly</p>
            <p className='product_full_single'>Kelly Women Premium Beige Pump</p>
            <p className='product_id_single'>ID : SH0061-KLY-BEIGE</p>
           <p className='single_price_page'><span className='price_before_single'>Rs 4000</span> <span className='price_after_single'>Rs 2349</span><span className='discount_percentage_single'>(-32%)</span></p>
        <p className='flash_few'>Only few left!</p>
           <div className='button_flex_single'>
              <MDBBtn className='single_cart_btn' style={{backgroundColor:"#4BB497",padding:"10px 70px"}}>ADD TO CART</MDBBtn>    <MDBBtn className='wishlist_single' style={{backgroundColor:"white",color:"#131039",fontWeight:"bolder"}}>ADD TO WISHLIST</MDBBtn>
            </div>
            {/* flex */}
  
  <div className='icon_delivery_time'>
    <p className='delivery_time_heading'>Delivery Time:</p>
    <p className='delivery_estimate'>Lahore, Rawalpindi, Islamabad: 1-2 days</p>
    <p className='delivery_estimate'>Other cities: 1-4 days</p>
  </div>

            <Faq data={faqdata}/>
           {/* links */}
  <div className='category_links_single_page'>
    <p className='delivery_time_heading'>#Tags</p>
    <div className='category_links_tags_flex'>
      <Link className='single_button_tag'>Shoes</Link>
      <Link className='single_button_tag'>Women</Link>
      <Link className='single_button_tag'>Shoes</Link>
      <Link className='single_button_tag'>Pumps</Link>
      <Link className='single_button_tag'>Kelly</Link>
    </div>
  </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Singleproduct;
