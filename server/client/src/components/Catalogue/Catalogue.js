// imports css

import "./Catalogue.css";
import { Link } from 'react-router-dom'

const Catalogue = (props) => {
  return (
    <div className='Catlogue_wrapper'>
      <div className='Catalogue_row' >
        <Link
          to="/shop"
          state={
            [
              { label: 'men', subCategories: ['all'] }
            ]
          } className='width_33_1' style={{ backgroundImage: `url(${props.men})` }}></Link>

        <div className='width_33_2  middle_column  ' >
          <Link to="/shop" state={
            [
              { label: 'kids', subCategories: ['all'] }
            ]
          } className='middle_child  middle_1' style={{ backgroundImage: `url(${props.kids})` }} ></Link>
          <Link to="/shop" className='middle_child middle_2' state={
            [
              { label: 'New Arrivals', subCategories: ['all'] }
            ]
          } style={{ backgroundImage: `url(${props.trend})` }} ></Link>
        </div>
        <Link to="/shop" className='width_33_3' state={
          [
            { label: 'women', subCategories: ['all'] }
          ]
        } style={{ backgroundImage: `url(${props.women})` }}></Link>
      </div>
    </div>
  )
}

export default Catalogue;

