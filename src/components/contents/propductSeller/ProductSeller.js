import React from "react";
import "./productseller.scss";
import ReactStars from "react-rating-stars-component";
import imgProduct from "../../../assets/images/product-img.png";
import { Link } from "react-router-dom";
const ProductSeller = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="seller">
      <h2 className="seller__title">Best seller</h2>
      <div className="seller__filter">
        <span className="seller__filter--title">all</span>
        <span className="seller__filter--title">bags</span>
        <span className="seller__filter--title">sneakers</span>
        <span className="seller__filter--title">belt</span>
        <span className="seller__filter--title">Sunglasses</span>
      </div>
      <div className="seller__list">
        <Link to="/" className="seller__item">
          <img src={imgProduct} alt="" className="seller__item--img" />
          <span className="seller__item--label">Hot</span>
          <p className="seller__item--title">Nike Air Max 270 React</p>
          <div className="seller__item--star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="seller__item--info">
            <span className="seller__item--price">$299,43</span>
            <span className="seller__item--discount">$554,34</span>
            <span className="seller__item--sales">24% off</span>
          </div>
        </Link>
        <Link to="/" className="seller__item">
          <img src={imgProduct} alt="" className="seller__item--img" />
          <span className="seller__item--label">Hot</span>
          <p className="seller__item--title">Nike Air Max 270 React</p>
          <div className="seller__item--star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="seller__item--info">
            <span className="seller__item--price">$299,43</span>
            <span className="seller__item--discount">$554,34</span>
            <span className="seller__item--sales">24% off</span>
          </div>
        </Link>{" "}
        <Link to="/" className="seller__item">
          <img src={imgProduct} alt="" className="seller__item--img" />
          <span className="seller__item--label">Hot</span>
          <p className="seller__item--title">Nike Air Max 270 React</p>
          <div className="seller__item--star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="seller__item--info">
            <span className="seller__item--price">$299,43</span>
            <span className="seller__item--discount">$554,34</span>
            <span className="seller__item--sales">24% off</span>
          </div>
        </Link>{" "}
        <Link to="/" className="seller__item">
          <img src={imgProduct} alt="" className="seller__item--img" />
          <span className="seller__item--label">Hot</span>
          <p className="seller__item--title">Nike Air Max 270 React</p>
          <div className="seller__item--star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="seller__item--info">
            <span className="seller__item--price">$299,43</span>
            <span className="seller__item--discount">$554,34</span>
            <span className="seller__item--sales">24% off</span>
          </div>
        </Link>{" "}
        <Link to="/" className="seller__item">
          <img src={imgProduct} alt="" className="seller__item--img" />
          <span className="seller__item--label">Hot</span>
          <p className="seller__item--title">Nike Air Max 270 React</p>
          <div className="seller__item--star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="seller__item--info">
            <span className="seller__item--price">$299,43</span>
            <span className="seller__item--discount">$554,34</span>
            <span className="seller__item--sales">24% off</span>
          </div>
        </Link>
      </div>
      <div className="seller__load-more">Load more</div>
    </div>
  );
};

export default ProductSeller;
