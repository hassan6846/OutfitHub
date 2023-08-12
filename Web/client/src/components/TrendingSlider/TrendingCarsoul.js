import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../Card/ProductCard";
import Axios from "axios";

const TrendingCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products")
      .then(response => {
        const mensClothingProducts = response.data.filter(product => product.category === "men's clothing");
        setProducts(mensClothingProducts);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <Card
              image={product.image} // Pass the image URL here
              originalPrice={product.price} // Pass the price
              discountedPrice={product.discountedPrice} // Pass the discounted price if available
              productName={product.title} // Pass the product title
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingCarousel;
