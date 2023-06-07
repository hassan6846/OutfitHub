import React, { useState } from 'react';
import './AdminSideBar.css';

const AdminSideBar = () => {
  const [isToggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  return (
    
        <div className="SideBar_main">
      <div className={`AdminSideBar_Wrapper_20 ${isToggled ? 'AdminSideBar_Wrapper_20' : 'narrow'}`}></div>
      <div onClick={handleClick} className="SideBar_Toggle"><button className="btnSidebar"><img src="./toggle.svg"alt="➕"className={`toggle_svg ${isToggled ? 'flipped' : ''}`}/></button></div>
    </div>

  
  );
};

export default AdminSideBar;
