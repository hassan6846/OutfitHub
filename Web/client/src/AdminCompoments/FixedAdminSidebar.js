import React, { useState } from "react";
import "./fixedSidebar.css";
import { Link } from "react-router-dom";
import { BsFillBarChartLineFill } from "react-icons/bs";
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
      <Link className="AdminNavBtn"> <BsFillBarChartLineFill className="iconHome"/> <p className="AdminNavBtnTitle">Dashboard</p>   </Link>
       </div>
      <div className="btnWrapper"> <button className="sidebartoggle" onClick={toggleMenu}>🎯</button></div>
    <div className="content">l</div>
    </div>
  );
}
