import axios from "axios"

import { useEffect, useState } from "react"
import "./Trending.css"
import { ENDPOINT } from "../../../api/Endpoint"
import Slug from "../../../helpers/Slugify"
import ProductCard from "../../../components/Card/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { addtoLiked, removeFromLiked } from "../../../Slices/LikedSlice"
import toast from "react-hot-toast"

const Trending = () => {
  const dispatch = useDispatch()
  const liked = useSelector((state) => state.like.products);
  const [product, setproducts] = useState([])

  useEffect(() => {
    const FetchTrending = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/products/promotions/trending`, {

        })

        setproducts(response.data.product)
        console.log(response.data.product)
      } catch (error) {
        console.log(error)
        toast.error("Error While Fetching Products.")
      }
    }
    FetchTrending()
  }, [])

  const handleLikeToggle = (product) => {

    const isLiked = liked.some((item) => item._id === product._id);

    if (isLiked) {

      dispatch(removeFromLiked(product));
      toast('Removed from Liked item!', {
        icon: '😥',
      });
    } else {

      dispatch(addtoLiked(product));
      toast('Added to liked item!', {
        icon: '🎉',
      });
    }
  };
  return (
    <div className="Trending-Page-Container">
      {
        product.map((product, index) => (
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
        ))
      }
    </div>
  )
}

export default Trending
