
import { MdAdminPanelSettings } from 'react-icons/md'; 
import { FaLongArrowAltRight } from "react-icons/fa";
//styles
import './AdminAlert.css';
//LIB
import { Link } from 'react-router-dom';

const AdminAlert = () => {
    return (
        <div className='AdminAlertWrapper'>
            <div>
                <p>{""}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                <MdAdminPanelSettings className="AdminAlertIcon" /> {/* Add the MUI icon */}
                <p className="AdminAlertText">Visit Admin Page to manage Content</p>
            </div>
            <div style={{ flexDirection: "row", justifyItems: "center", alignItems: "center" }}>


                <Link to="/admin" className='HoverTarget' >Visit Now  <FaLongArrowAltRight /></Link>



            </div>
        </div>
    );
};

export default AdminAlert;
