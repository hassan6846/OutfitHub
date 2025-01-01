import React from 'react'

const Stats = () => {
  return (
    <div>
      <p className="wishlist_page_head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Statistical Overview
      </p>
      <iframe 

        title="Statistical Overview"
        style={{ 
          background: "#fff", 
          border: "none", 
          borderRadius: "2px", 
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)", 
          width: "100%", 
          height: "300vh"
        }}  
        src="https://charts.mongodb.com/charts-ecommerce-vilpyjb/embed/dashboards?id=6763f8e1-c78b-4461-8cae-ce15aecfe651&theme=light&autoRefresh=true&maxDataAge=5000&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale">
      </iframe>
    </div>
  )
}

export default Stats