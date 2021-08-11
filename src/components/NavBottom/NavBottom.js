import React from "react";
import "./navbottom.scss";
import { Link } from "react-router-dom";
import { Images } from "../../constants/images";
const NavBottom = () => {
  return (
    <div className="nav-bottom-container">
      <div className="nav-bottom-wrapper wrapper-product">
        <Link className="nav-bottom__logo" to="/">
          <img src={Images.ICON} alt="E-Comm" className="logo-img" />
          E-Comm
        </Link>
        <div className="nav-bottom__menu">
          <ul className="nav-bottom__menu--list">
            <li className="nav-bottom__menu--item">home</li>
            <li className="nav-bottom__menu--item">bags</li>
            <li className="nav-bottom__menu--item">sneakers</li>
            <li className="nav-bottom__menu--item">belt</li>
            <li className="nav-bottom__menu--item">contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
