import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./Wishlists.css"
import {Link} from "react-router-dom"
import { BsFillCartPlusFill } from "react-icons/bs"
import trash from 'react-useanimations/lib/trash';
import UseAnimations from "react-useanimations";

export default function Wishlists() {
  return (
    <>
      <p className='wishlist_page_head'>Wishlists</p>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>ProductName</th>
            <th scope='col'>Unit Price</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
            <th scope='col'></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px',  borderRadius: '5px' }}
                  className= 'img_wishlists'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>John Doe</p>
                  <p className='text-muted mb-0'><MDBBadge  className='text-dark' color='secondary'>Men</MDBBadge> <MDBBadge  className='text-dark' color='light'>T-shirt</MDBBadge></p>
                </div>
              </div>
            </td>
            <td>

              <p className='text-muted mb-0'>10$ <span style={{ textDecoration: "line-through" }}>20$</span></p>
            </td>
            <td>
              <MDBBadge color='success' light pill>
                In Stock
              </MDBBadge>
            </td>

            <td>
              <MDBBtn style={{backgroundColor:"rgb(75,180,151)",color:"#131039",display:"flex",columnGap:"0.5rem",alignItems:"center"}} className='Wishlist_cart_btns' color='link' rounded size='sm'>
                AddtoCart <BsFillCartPlusFill />
              </MDBBtn>
            </td>
            {/* DELETE */}
            <td>
              <div className='trash_icon_btn'><UseAnimations className='flash_icon_wislisht' animation={trash} /></div>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      {/* else iF NO WISLISTS */}
      <div className='wislisht_empty_container'>
        <p>Your Wishlist is Empty</p>
        <Link to="/shop" className='wishlistLink'>Continue Shopping</Link>
      </div>
      
      </>
  );
}