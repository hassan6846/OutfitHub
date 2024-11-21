import React from 'react'
import { Link } from "react-router-dom"
//css
import "./Category.css"
const CategoryBar = () => {
  const Data = [
    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif",
      category: "Women",
      subcategory: "",


    },
    {
      title: "Kurta",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif",
      category: "Women",
      subcategory: "",

    },
    {
      title: "Women's Shalwar Kameez",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Handbags",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_HandBags.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Dresses",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Men's Casual Shirts",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Men_Casual_Shirt.gif",
      category: "Men",
      subcategory: "",

    },
    {
      title: "Men's T-Shirts",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif",
      category: "Men",
      subcategory: "",

    }, {
      title: "Girls Clothings",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Gilrs_Clothing.gif",
      category: "Girls",
      subcategory: "",

    }, {
      title: "Boys Clothings",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Boys_Clothing.gif",
      category: "Kids",
      subcategory: "",

    }, {
      title: "Lawn",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Lawn.gif",
      category: "Women",
      subcategory: "",


    }, {
      title: "Women's Sneakers",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sneakers.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Sports Shoes",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Sports_Shoes.gif",
      category: "Men",
      subcategory: "",

    }, {
      title: "Women's Pumps",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Pumps.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Casual Shoes",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Casual_Shoes.gif",
      category: "Men",
      subcategory: "",

    }, {
      title: "Trousers",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif",
      category: "Men",
      subcategory: "",

    }, {
      title: "Women's Bottoms",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Bottoms.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Makeup",
      param: "Women",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Makeup.gif",
      category: "Women",
      subcategory: "",

    }, {
      title: "Women's Sleepwear",
      param: "",
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sleepwear.gif",
      category: "Women",
      subcategory: "",

    },
  ]
  return (
    <div className='Category_Container' >
      {/* map card */}
      {
        Data.map((data) => (
          <div style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem", alignItems: "center", marginBottom: "10px" }}>
            <Link state={
              [
                { label: data.category, subCategories: [data.subcategory] }
              ]
            } to="/shop">
              <img alt={data.image} style={{ height: "180px", width: "180px", objectFit: 'cover', borderRadius: "5px" }} src={data.image} /></Link>
            <p style={{ marginTop: 0, marginBottom: 0, fontWeight: "500", fontSize: "16px", color: "#131039" }}>{data.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryBar