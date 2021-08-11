import React from "react";
import "./bannermid.scss";
import { Link } from "react-router-dom";
import { Images } from "../../../constants/images";
const BannerMid = () => {
  return (
    <div className="banner-mid">
      <div className="banner-mid__content">
        <h3 className="banner-mid__content--title">
          Adidas Men Running Sneakers
        </h3>
        <p className="banner-mid__content--text">
          Performance and design. Taken right to the edge.
        </p>
        <Link to="/" className="banner-mid__content--link">
          Shop now
        </Link>
      </div>
      <div className="banner-mid__img">
        <img src={Images.SHOES} alt="" className="banner-mid__img--img" />
      </div>
    </div>
  );
};

export default BannerMid;
