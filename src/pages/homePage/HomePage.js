import React from "react";
import Banner from "../../components/contents/banner/Banner";
import BannerMid from "../../components/contents/bannerMid/BannerMid";
import Benefit from "../../components/contents/benefit/Benefit";
import ProductSeller from "../../components/contents/propductSeller/ProductSeller";

import "./homepage.scss";
const HomePage = () => {
  return (
    <div className="home-container">
      <Banner />
      <div className="wrapper-product">
        <ProductSeller />
      </div>
      <BannerMid />
      <div className="wrapper-product">
        <Benefit />
      </div>
    </div>
  );
};

export default HomePage;
