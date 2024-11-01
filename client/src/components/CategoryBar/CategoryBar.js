import React from 'react'
import { Link } from "react-router-dom"
//css
import "./Category.css"
const CategoryBar = () => {
  const Data = [
    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },
    {
      title: "Kurta",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif"//card

    },
    {
      title: "Women's Shalwar Kameez",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif"//card

    }, {
      title: "Handbags",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_HandBags.gif"//card

    }, {
      title: "Dresses",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif"//card

    }, {
      title: "Men's Casual Shirts",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Men_Casual_Shirt.gif"//card

    },
    {
      title: "Men's T-Shirts",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif"//card

    }, {
      title: "Girls Clothings",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Gilrs_Clothing.gif"//card

    }, {
      title: "Boys Clothings",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Boys_Clothing.gif"//card

    }, {
      title: "Lawn",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Lawn.gif"//card

    }, {
      title: "Women's Sneakers",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sneakers.gif"//card

    }, {
      title: "Sports Shoes",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Sports_Shoes.gif"//card

    }, {
      title: "Women's Pumps",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Pumps.gif"//card

    }, {
      title: "Casual Shoes",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Casual_Shoes.gif"//card

    }, {
      title: "Trousers",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif"//card

    }, {
      title: "Women's Bottoms",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Bottoms.gif"//card

    }, {
      title: "Makeup",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Makeup.gif"//card

    }, {
      title: "Women's Sleepwear",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Women's_Sleepwear.gif"//card

    },
  ]
  return (
    <div className='Category_Container' >
      {/* map card */}
      {
        Data.map((data) => (
          <div style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem", alignItems: "center", marginBottom: "10px" }}>
            <Link to="/shop">
              <img alt={data.image} style={{ height: "220px", width: "220px", objectFit: 'cover' }} src={data.image} /></Link>
            <p style={{ marginTop: 0, marginBottom: 0, fontWeight: "500", fontSize: "16px", color: "#131039" }}>{data.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryBar