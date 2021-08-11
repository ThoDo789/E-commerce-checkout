import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../constants/images";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top__info">
          <div className="footer-top__info--logo">
            <img
              src={Images.ICON}
              alt=""
              className="footer-top__info--logo--img"
            />
            E-comm
          </div>
          <span className="footer-top__info--text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </span>
        </div>
        <div className="footer-top__info">
          <p className="footer-top__title">follow</p>
          <span className="footer-top__info--text">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </span>

          <div className="footer-top__social">
            <img src={Images.FACEBOOK} alt="facebook" />
            <img src={Images.TWITTER} alt="twitter" />
          </div>
        </div>
        <div className="footer-top__info">
          <p className="footer-top__title">Contact</p>
          <span className="footer-top__info--text">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </span>
        </div>
      </div>
      <div className="footer-center">
        <ul className="footer-center__list">
          <p className="footer-center__title">Information</p>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              about us
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              information
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              privacy policy
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              terms & conditions
            </Link>
          </li>
        </ul>{" "}
        <ul className="footer-center__list">
          <p className="footer-center__title">Information</p>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              about us
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              information
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              privacy policy
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              terms & conditions
            </Link>
          </li>
        </ul>{" "}
        <ul className="footer-center__list">
          <p className="footer-center__title">Information</p>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              about us
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              information
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              privacy policy
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              terms & conditions
            </Link>
          </li>
        </ul>{" "}
        <ul className="footer-center__list">
          <p className="footer-center__title">Information</p>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              about us
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              information
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              privacy policy
            </Link>
          </li>
          <li className="footer-center__item">
            <Link to="/" className="footer-center__link">
              terms & conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom__left">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>
        <div className="footer-bottom__right">
          <img src={Images.CARD} alt="card" />
          <img src={Images.CARD} alt="card" />
          <img src={Images.CARD} alt="card" />
          <img src={Images.CARD} alt="card" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
