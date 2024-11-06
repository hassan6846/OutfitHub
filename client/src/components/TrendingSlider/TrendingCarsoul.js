import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./TrendingCarsoul.css";

// card
import ProductCard from "../Card/ProductCard";
import axios from "axios";
import { ENDPOINT } from "../../api/Endpoint";
import Slug from "../../helpers/Slugify";

export default function TrendingCarsoul(props) {
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/products/promotions/trending`);
        setdata(response.data.product)
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct()
  }, [])
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={'auto'}
        className="mySwiper"
        style={{ marginBottom: props.margin }}

      >
        {
          data.map((product) => (
            <SwiperSlide style={{ width: "auto" }} key={product.id}>
              <ProductCard
                saved={Math.floor(((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100)}
                // pathname:`/shop/${Slug(item.name)}`,
                state={product}
                tagone={product.tags[Math.floor(Math.random() * product.tags.length)]}
                tagtwo={product.tags[Math.floor(Math.random() * product.tags.length)]}
                tagsthree={product.tags[Math.floor(Math.random() * product.tags.length)]}
                to={`/shop/${Slug(product.name)}`}
                name={product.name}
                image={product.image[0]} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
