import React from 'react'

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
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },    {
      title: "Tops",//for category
      param: "", //redirecting
      image: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif"//card

    },  
  ]
  return (
    <div className='Category_Container' >
      {/* map card */}
      {
        Data.map((data) => (
          <div style={{display:"flex",flexDirection:"column",rowGap:"0.3rem"}}>
            <img  alt={data.image}style={{height:"220px",width:"220px"}}  src={data.image} />
            <p style={{marginTop:0,marginBottom:0}}>{data.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryBar