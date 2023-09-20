import React from 'react';
// components
import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav';
import Footer from '../../../Layouts/footer/Footer';
import Faq from "react-faq-component"

// css
import './Singleproduct.css';
import { MDBBtn } from 'mdb-react-ui-kit';
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
      title:" 📦 PRODUCT DESCRIPTION",
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
           <p className='single_price_page'><span className='price_before_single'>Rs 4000</span> <span className='price_after_single'>Rs 2349</span></p>
       
           <div className='button_flex_single'>
              <MDBBtn className='single_cart_btn' style={{backgroundColor:"#4BB497"}}>ADD TO CART</MDBBtn>    <MDBBtn style={{backgroundColor:"white",color:"#131039"}}>ADD TO WISHLIST</MDBBtn>
            </div>
          
            <Faq data={faqdata}/>
     
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Singleproduct;
