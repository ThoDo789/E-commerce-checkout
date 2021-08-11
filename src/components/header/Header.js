import React from "react";
import NavBottom from "../NavBottom/NavBottom";
import NavTop from "../NavTop/NavTop";
import "./header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <NavTop />
      <NavBottom />
    </div>
  );
};

export default Header;
