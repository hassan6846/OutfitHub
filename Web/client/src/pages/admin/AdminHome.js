import React from "react";
import "./AdminHome.css";
import FixedSidebar from "../../AdminCompoments/FixedAdminSidebar";

export default function AdminHome() {

  return (
    <div >
    <FixedSidebar/>
      <div className="content"></div>
    </div>
  );
}
