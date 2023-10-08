import React from 'react'
import GetTime from '../../../helpers/GetCurrentDate'
const Overview = () => {
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Hi Admin, <span><p style={{ backgroundColor: "#F9F9F9", fontSize: "18px", padding: "0.4rem", border: "1px solid #ddc3c3", borderRadius: "5px", marginBottom: "0px", userSelect: "none" }}>{GetTime()}</p></span> </p>
    </div>
  )
}

export default Overview