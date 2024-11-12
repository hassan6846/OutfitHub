// imports css

import "./Catalogue.css";
import { Link } from 'react-router-dom'

const Catalogue = (props) => {
  return (
    <div className='Catlogue_wrapper'>
      <div className='Catalogue_row' >
        <Link className='width_33_1' style={{ backgroundImage: `url(${props.men})` }}></Link>
        <div className='width_33_2  middle_column  ' >
          <Link className='middle_child  middle_1' style={{ backgroundImage: `url(${props.kids})` }} ></Link>
          <Link to={props.trendurl} className='middle_child middle_2' style={{ backgroundImage: `url(${props.trend})` }} ></Link>
        </div>
        <Link className='width_33_3' style={{ backgroundImage: `url(${props.women})` }}></Link>
      </div>
    </div>
  )
}

export default Catalogue;

