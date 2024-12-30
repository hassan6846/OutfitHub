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

            { category: 'men', subcategory: "all" }

          } className='width_33_1' style={{ backgroundImage: `url(${props.men})` }}></Link>

        <div className='width_33_2  middle_column  ' >
          <Link to="/shop" state={


            { category: 'kids', subcategory: "all" }
          } className='middle_child  middle_1' style={{ backgroundImage: `url(${props.kids})` }} ></Link>
          <Link to="/shop" className='middle_child middle_2' state={

            { category: 'newarrival', subcategory: "all" }
          } style={{ backgroundImage: `url(${props.trend})` }} ></Link>
        </div>
        <Link to="/shop" className='width_33_3' state={

          { category: 'women', subcategory: "all" }
        } style={{ backgroundImage: `url(${props.women})` }}></Link>
      </div>
    </div>
  )
}

export default Catalogue;

