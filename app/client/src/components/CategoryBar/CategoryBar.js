import React from 'react'
import { Link } from "react-router-dom"
//css
import "./Category.css"
const CategoryBar = () => {
  const Data = [
    {
      title: "Tops",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif",
      category: "women",
      subcategory: "tops",


    },
    {
      title: "Kurta",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif",
      category: "women",
      subcategory: "kurta",

    },
    {
      title: "Women's Shalwar Kameez",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif",
      category: "women",
      subcategory: "shalwar kameez",

    }, {
      title: "Handbags",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_HandBags.gif",
      category: "women",
      subcategory: "handbags",

    }, {
      title: "Dresses",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif",
      category: "women",
      subcategory: "dresses",

    }, {
      title: "Men's Casual Shirts",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Men_Casual_Shirt.gif",
      category: "men",
      subcategory: "casual shirts",

    },
    {
      title: "Men's T-Shirts",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif",
      category: "men",
      subcategory: "t-shirts",

    }, {
      title: "Girls Clothings",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Gilrs_Clothing.gif",
      category: "girls",
      subcategory: "clothings",

    }, {
      title: "Boys Clothings",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Boys_Clothing.gif",
      category: "kids",
      subcategory: "clothings",

    }, {
      title: "Lawn",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Lawn.gif",
      category: "women",
      subcategory: "lawn",


    }, {
      title: "Women's Sneakers",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sneakers.gif",
      category: "women",
      subcategory: "sneakers",

    }, {
      title: "Sports Shoes",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Sports_Shoes.gif",
      category: "men",
      subcategory: "sports",

    }, {
      title: "Women's Pumps",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Pumps.gif",
      category: "women",
      subcategory: "pumps",

    }, {
      title: "Casual Shoes",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Casual_Shoes.gif",
      category: "men",
      subcategory: "casual",

    }, {
      title: "Trousers",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif",
      category: "men",
      subcategory: "trousers",

    }, {
      title: "Women's Bottoms",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Bottoms.gif",
      category: "women",
      subcategory: "bottoms",

    }, {
      title: "Makeup",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Makeup.gif",
      category: "women",
      subcategory: "makeup",

    }, {
      title: "Women's Sleepwear",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sleepwear.gif",
      category: "women",
      subcategory: "sleepwear",

    },
  ]
  return (
    <div className='Category_Container' >
      {/* map card */}
      {
        Data.map((data, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem", alignItems: "center", marginBottom: "10px" }}>
            <Link state={
              {
                category: data.category,
                subcategory: data.subcategory,
              }

            } to="/shop">
              <img className='ImageCategory' alt={data.image} src={data.image} /></Link>
            <p className='Cateogry_img_p'>{data.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryBar