import React from "react";
import arrowIcon from "../../assets/svgs/arrow-down.svg";
import cartIcon from "../../assets/svgs/Cart.svg";
import searchIcon from "../../assets/svgs/search-icon.svg";
import userIcon from "../../assets/svgs/user.svg";
import "./navtop.scss";
const NavTop = () => {
  return (
    <div className="nav-top__container">
      <div className="nav-top__wrapper wrapper-product">
        <div className="nav-top__left">
          <span className="nav-top__left--la">
            ES
            <img src={arrowIcon} alt="s" className="icon-arrow" />
          </span>
          <span className="nav-top__left--la">
            USA
            <img src={arrowIcon} alt="s" className="icon-arrow" />
          </span>
        </div>
        <div className="nav-top-right">
          <div className="nav-top-right__actions">
            <img
              src={userIcon}
              alt="user"
              className="nav-top-right__actions--icon"
            />
            My profile
          </div>
          <div className="nav-top-right__actions">
            <img
              src={cartIcon}
              alt="cart"
              className="nav-top-right__actions--cart"
            />
            <span className="nav-top-right__actions--amount">2</span>
          </div>
          <div className="nav-top-right__actions">
            <span className="nav-top-right__actions--item">Items</span>
            <span className="nav-top-right__actions--price">$0.00</span>
            <img
              src={searchIcon}
              alt=""
              className="nav-top-right__actions--icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
