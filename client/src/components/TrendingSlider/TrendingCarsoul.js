import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./TrendingCarsoul.css";

// card
import ProductCard from "../Card/ProductCard";
const products = [
  { id: 1, name: "Women Denim Charcoal.", image: "https://charcoal.com.pk/cdn/shop/files/DSC01422.jpg?v=1702534486&width=700" },
  { id: 2, name: "Ember Enigma Jeans", image: "https://charcoal.com.pk/cdn/shop/files/DSC01498_1dcbd26e-c690-4497-95e8-94de95187ff1.jpg?v=1702887338&width=700" },
  { id: 3, name: "Shadow Grace Denim", image: "https://charcoal.com.pk/cdn/shop/files/DSC00642_3054238a-094c-4df1-8855-879857b0b4d8.jpg?v=1698219484&width=700" },
  { id: 4, name: "Steel Serenity Jeans", image: "https://charcoal.com.pk/cdn/shop/files/DSC08224.jpg?v=1711524521&width=700" },
  { id: 5, name: "Ashen Aura Denim", image: "https://charcoal.com.pk/cdn/shop/files/DSC08258.jpg?v=1711523773&width=700" },
  { id: 6, name: "Graphite Glamour Jeans ", image: "https://charcoal.com.pk/cdn/shop/files/DSC09447_695f20b2-12a3-44e4-b207-98b210a8b203.jpg?v=1698315835&width=700" },
  { id: 7, name: "Smokey Chic Denim", image: "https://charcoal.com.pk/cdn/shop/products/FULL-SLEEVE-DENIM-JACKET-DARK-BLACK-at-Charcoal-Clothing-85.jpg?v=1680068816&width=700" },
  { id: 8, name: "Slate Essence Jeans", image: "https://charcoal.com.pk/cdn/shop/files/DSC03224.jpg?v=1701687980&width=700" },
  { id: 9, name: "Misty Charcoal Denim  ", image: "https://charcoal.com.pk/cdn/shop/files/DSC02108.jpg?v=1705495086&width=700" },

];
export default function TrendingCarsoul(props) {
  return (
    <>
      <Swiper
spaceBetween={5}
slidesPerView={'auto'}
     className="mySwiper"
     style={{ marginBottom: props.margin }}

      >
        {
          products.map((product) => (
            <SwiperSlide style={{width:"auto"}} key={product.id}>
              <ProductCard to={`/shop/product/${product.name}`} name={product.name} image={product.image} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
