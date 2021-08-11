import React from "react";
import "./benefit.scss";

import ReactStars from "react-rating-stars-component";
import { Images } from "../../../constants/images";
const Benefit = () => {
  return (
    <>
      <div className="benefits">
        <div className="benefits__item">
          <img
            src={Images.FREESHIP}
            alt="ship"
            className="benefits__item--img"
          />
          <p className="benefits__item--title">shipping</p>
          <span className="benefits__item--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="benefits__item">
          <img
            src={Images.FREESHIP}
            alt="ship"
            className="benefits__item--img"
          />
          <p className="benefits__item--title">shipping</p>
          <span className="benefits__item--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="benefits__item">
          <img
            src={Images.FREESHIP}
            alt="ship"
            className="benefits__item--img"
          />
          <p className="benefits__item--title">shipping</p>
          <span className="benefits__item--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
      </div>
      <div className="latest-new">
        <h3 className="latest-new__title">Latest new</h3>
        <div className="latest-new__list">
          <div className="latest-new__list--item">
            <div>
              <img
                src={Images.FIGMA}
                alt=""
                className="latest-new__list--item--img"
              />
            </div>

            <div className="latest-new__list--item__content">
              <span className="latest-new__list--item__content--time">
                01 Jan, 2015
              </span>
              <p className="latest-new__list--item__content--title">
                Fashion Industry
              </p>
              <span className="latest-new__list--item__content--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>{" "}
          <div className="latest-new__list--item">
            <div>
              <img
                src={Images.FIGMA}
                alt=""
                className="latest-new__list--item--img"
              />
            </div>

            <div className="latest-new__list--item__content">
              <span className="latest-new__list--item__content--time">
                01 Jan, 2015
              </span>
              <p className="latest-new__list--item__content--title">
                Fashion Industry
              </p>
              <span className="latest-new__list--item__content--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>{" "}
          <div className="latest-new__list--item">
            <div>
              <img
                src={Images.FIGMA}
                alt=""
                className="latest-new__list--item--img"
              />
            </div>

            <div className="latest-new__list--item__content">
              <span className="latest-new__list--item__content--time">
                01 Jan, 2015
              </span>
              <p className="latest-new__list--item__content--title">
                Fashion Industry
              </p>
              <span className="latest-new__list--item__content--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-product ">
        <h3 className="latest-new__title">feature title</h3>
        <div className="feature-product__list">
          <div className="feature-product__content">
            <div>
              <img
                src={Images.RETANG}
                alt=""
                className="feature-product__content--img"
              />
            </div>
            <div className="feature-product__content--info">
              <p className="feature-product__content--info--title">
                Blue Swade Nike Sneakers
              </p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={18}
                isHalf={true}
                color="#C1C8CE"
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <div className="feature-product__content--discount">
                <span className="feature-product__content--discount--price">
                  $499
                </span>
                <span className="feature-product__content--discount--old-price">
                  $599
                </span>
              </div>
            </div>
          </div>
          <div className="feature-product__content">
            <div>
              <img
                src={Images.RETANG}
                alt=""
                className="feature-product__content--img"
              />
            </div>
            <div className="feature-product__content--info">
              <p className="feature-product__content--info--title">
                Blue Swade Nike Sneakers
              </p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                color="#C1C8CE"
                size={18}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <div className="feature-product__content--discount">
                <span className="feature-product__content--discount--price">
                  $499
                </span>
                <span className="feature-product__content--discount--old-price">
                  $599
                </span>
              </div>
            </div>
          </div>
          <div className="feature-product__content">
            <div>
              <img
                src={Images.RETANG}
                alt=""
                className="feature-product__content--img"
              />
            </div>
            <div className="feature-product__content--info">
              <p className="feature-product__content--info--title">
                Blue Swade Nike Sneakers
              </p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                color="#C1C8CE"
                size={18}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <div className="feature-product__content--discount">
                <span className="feature-product__content--discount--price">
                  $499
                </span>
                <span className="feature-product__content--discount--old-price">
                  $599
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
