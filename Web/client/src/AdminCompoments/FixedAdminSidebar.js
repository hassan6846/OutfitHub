import React, { useState } from "react";
import "./fixedSidebar.css";

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
      <div className={menuClass}> </div>
      <div className="btnWrapper"> <button className="sidebartoggle" onClick={toggleMenu}>🎯</button></div>
    
    </div>
  );
}
