import React from 'react'
import { Link } from "react-router-dom"
//css
import "./Category.css"
const CategoryBar = () => {
  const Data = [
    {
      title: "Tops",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif",
      category: "Women",
      subcategory: "Tops",


    },
    {
      title: "Kurta",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif",
      category: "Women",
      subcategory: "Kurta",

    },
    {
      title: "Women's Shalwar Kameez",//for category

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif",
      category: "Women",
      subcategory: "Shalwar-Kameez",

    }, {
      title: "Handbags",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_HandBags.gif",
      category: "Women",
      subcategory: "Handbags",

    }, {
      title: "Dresses",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif",
      category: "Women",
      subcategory: "Dresses",

    }, {
      title: "Men's Casual Shirts",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Men_Casual_Shirt.gif",
      category: "Men",
      subcategory: "Casual-Shirts",

    },
    {
      title: "Men's T-Shirts",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif",
      category: "Men",
      subcategory: "T-Shirts",

    }, {
      title: "Girls Clothings",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Gilrs_Clothing.gif",
      category: "Girls",
      subcategory: "Clothing",

    }, {
      title: "Boys Clothings",
    
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Boys_Clothing.gif",
      category: "Kids",
      subcategory: "Clothing",

    }, {
      title: "Lawn",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Lawn.gif",
      category: "Women",
      subcategory: "Lawn",


    }, {
      title: "Women's Sneakers",
 
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sneakers.gif",
      category: "Women",
      subcategory: "Sneakers",

    }, {
      title: "Sports Shoes",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Sports_Shoes.gif",
      category: "Men",
      subcategory: "Sports",

    }, {
      title: "Women's Pumps",
 
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Pumps.gif",
      category: "Women",
      subcategory: "Pumps",

    }, {
      title: "Casual Shoes",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Casual_Shoes.gif",
      category: "Men",
      subcategory: "Casual",

    }, {
      title: "Trousers",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif",
      category: "Men",
      subcategory: "Trousers",

    }, {
      title: "Women's Bottoms",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Bottoms.gif",
      category: "Women",
      subcategory: "Bottoms",

    }, {
      title: "Makeup",
    
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Makeup.gif",
      category: "Women",
      subcategory: "Makeup",

    }, {
      title: "Women's Sleepwear",

      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sleepwear.gif",
      category: "Women",
      subcategory: "Sleepwear",

    },
  ]
  return (
    <div className='Category_Container' >
      {/* map card */}
      {
        Data.map((data,index) => (
          <div  key={index} style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem", alignItems: "center", marginBottom: "10px" }}>
            <Link state={
            {
              category:data.category,
              subcategory:data.subcategory,
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