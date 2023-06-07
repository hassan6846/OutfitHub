import React from 'react'
// components
import AdminNav from './AdminNav'
import TopCards from './TopProps'
import CategorySalesGraph from "./CategorySalesGraph"
// css
import "./AdminMain.css"
const AdminMain = () => {
  return (
    <div className="admin_80_wrapper">
    <AdminNav/>
<div className='wrapper_flow'>
<div className='props_row'> <TopCards/> <TopCards/> <TopCards/></div>
    <CategorySalesGraph/>
</div>
   </div>
  )
}

export default AdminMain