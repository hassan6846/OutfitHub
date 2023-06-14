import React, { useState } from "react";
import "./fixedSidebar.css";
import { BsFillBarChartLineFill,BsGearFill,BsFillBagPlusFill,BsFillPersonFill } from "react-icons/bs";
import { BiBookAlt,BiLogOut ,BiLeftArrow} from "react-icons/bi";
import { Link } from "react-router-dom";
import LinkProps from "./LinkProps";
export default function FixedSidebar() {
  const [menuOpen, setMenuOpen] = useState(true);

  // handle click
  function toggleMenu() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  let menuClass = "menu";
  if (menuOpen) {
    menuClass += " menu-open";
  }

  return (
    <div className="AdminHomeWrapper">
      <div className={menuClass}> 
     <Link   to="/"  className="admin_Logo"><img className="Admin_Logo"  alt="main logo" src="https://svgshare.com/i/uCt.svg'%20title='lorem"></Link> 
    <div className="Admin_actions_wrapper">
    <LinkProps to="/admin" linkName="Dashboard" iconName={BsFillBarChartLineFill} />
      <LinkProps to="/admin/products" linkName="Products" iconName={BsFillBagPlusFill} />
      <LinkProps to="/admin/orders" linkName="Orders" iconName={BiBookAlt} />
      <LinkProps to="/admin/users"  linkName="Users" iconName={BsFillPersonFill} />
      <LinkProps to="/admin/settings" disp="block" linkName="Settings" iconName={BsGearFill} />
    </div>
{/* other admin Actions */}
 
    <div  className="bottom"><LinkProps  to="/admin/logout"  linkName="Logout" iconName={BiLogOut} /></div>
       </div>
      <div className="btnWrapper"> <button className="sidebartoggle" onClick={toggleMenu}><BiLeftArrow className="SideArrow" /></button></div>
    
    </div>
  );
}
