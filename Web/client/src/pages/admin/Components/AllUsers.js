import React from 'react'
import {Link} from "react-router-dom"
import "./AllUsers.css"

const AllUsers = () => {
  return (
    <div className='user_container'>
    <div className='allUser_head'>
      <p className='Users_title'> Users Manegment</p>
  <div>   
  <label for="sort">Sort by:</label>
<select id="sort">
  <option value="newest">Newest </option>
  <option value="oldest">Oldest </option>
  <option value="activity">Most Orders</option>
</select>
     <Link className='invite_Link'>Invite Users</Link>

      </div>
    </div>
    <div className='table_container'>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Users ID</th>
      <th scope="col">Image </th>
      <th scope="col"> Name </th>
      <th scope="col"> Role </th>
      <th scope="col">Joined In </th>
      <th scope="col">Status </th>
      <th scope="col">Visited </th>
      <th scope="col"> Last Product Viewed  </th>
      <th scope="col">Product Viewes </th>
      <th scope="col">  Orders No.  </th>
      <th scope="col"> Last Order  </th>
      <th scope="col"> Amount  </th>
<th>Actions</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td><img className='productIMG_ALL' src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product_img'/></td>
      <td><p className='product_name'>@Mario Wasser</p></td>
      <td><p className='product_name'>User</p></td>
      <td><p className='product_price'><span></span>3/dec/2022</p></td>
      <td className='productStatus_true'><p className='status_quo'> <span className='stock_amount'></span> Online</p></td>
      <td ><p className='product_selled'>3</p></td>
      <td><img className='productIMG_ALL' src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product_img'/></td>

      <td ><p className='product_views'>300</p></td>
      <td ><p className='product_earned'><span className='dolor'>$</span>36</p></td>
      <td><p className='product_name'></p></td>
    </tr>
 
  </tbody>
</table>
      
    </div>
        </div>
  )
}

export default AllUsers