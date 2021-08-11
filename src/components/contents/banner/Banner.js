import React from "react";
import { Images } from "../../../constants/images";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__offer">
        <img src={Images.BANNER} alt="banner" className="banner__offer--img" />
        <h1 className="banner__offer--title">Super Flash Sale 50% Off</h1>
      </div>
      <div className="banner-products">
        <div className="banner-products__detail">
          <img
            src={Images.PRODUCT_BANNER}
            alt=""
            className="banner-products__detail--img"
          />
          <p className="banner-products__detail--title">
            fs - quilted max cross bag
          </p>
          <div className="banner-products__discount">
            <span className="banner-products__discount--price">$534.33</span>
            <span className="banner-products__discount--sales">24% off</span>
          </div>
          <p className="banner-products__detail--price">$299.43</p>
        </div>
        <div className="banner-products__detail">
          <img
            src={Images.PRODUCT_BANNER}
            alt=""
            className="banner-products__detail--img"
          />
          <p className="banner-products__detail--title">
            fs - quilted max cross bag
          </p>
          <div className="banner-products__discount">
            <span className="banner-products__discount--price">$534.33</span>
            <span className="banner-products__discount--sales">24% off</span>
          </div>
          <p className="banner-products__detail--price">$299.43</p>
        </div>
        <div className="banner-products__detail">
          <img
            src={Images.PRODUCT_BANNER}
            alt=""
            className="banner-products__detail--img"
          />
          <p className="banner-products__detail--title">
            fs - quilted max cross bag
          </p>
          <div className="banner-products__discount">
            <span className="banner-products__discount--price">$534.33</span>
            <span className="banner-products__discount--sales">24% off</span>
          </div>
          <p className="banner-products__detail--price">$299.43</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
