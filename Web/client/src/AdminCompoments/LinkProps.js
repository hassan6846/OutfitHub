import React from 'react';
import "../pages/admin/AdminHome.css"
import { Link } from 'react-router-dom';
import  "./LinkProps.css"

const LinkProps = (props) => {
  const Icon = props.iconName; // Dynamic assignment of the component name

  return (
    <div className="linksWrapper">
      <Link to={props.to} className="AdminNavBtn">
        <i className="iconWrapper">
        <div className="notify" style={{ display: props.disp }}></div>
          <Icon className="iconHome" /> {/* Use the dynamic component */}
        </i>
        <p className="AdminNavBtnTitle">{props.linkName}</p>
      </Link>
    </div>
  );
};

export default LinkProps;
