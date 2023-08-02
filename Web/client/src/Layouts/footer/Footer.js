import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer id="footer" style={{marginTop:props.MarginTop}}>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="./playstore.png" alt="playstore" />
        <img src="./Appstore.png" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>DESIGN.</h1>
        <p> We care about you, not about the sale</p>

        <p>Copyrights 2023 &copy; Hassan Ali</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a  target="__blank"  href="http://instagram.com/jessepinkman">Instagram</a>
        <a target="__blank"  href="http://youtube.com/waltersus">Youtube</a>
        <a  target="__blank" href="http://instagram.com/Solong_gay_bowser">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
