import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../common/Routes";

export default function Footer() {
  return (
    <div className="footer row">
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <h3>About Instant Order:</h3>
        <p>
          Pesto Tech is proudly launching its own Online Clothing Store named Little Tags. You have
          been awarded with the project and you need to design and develop this project which should
          meet the requirements mentioned in the MVP below.
        </p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <h3>Product Categories:</h3>
        <ul>
          <li>
            <a href=".">Mens Wear</a>
          </li>
          <li>
            <a href=".">Womens Wear</a>
          </li>
          <li>
            <a href=".">Beauty Care</a>
          </li>
          <li>
            <a href=".">Jewellery</a>
          </li>
          <li>
            <a href=".">Electronics</a>
          </li>
        </ul>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <h3>Quick Links:</h3>
        <ul>
          <li>
            <Link to={ROUTES.PRIVACYPOLICY}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={ROUTES.TERMSOFUSE}>Terms Of Use</Link>
          </li>
          <li>
            <a href=".">Return policy</a>
          </li>
          <li>
            <a href=".">Payment Checkout</a>
          </li>
          <li>
            <a href=".">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <h3>Reach Us:</h3>
        <p>
          <i className="las la-street-view"></i> : B-11, Shanti Bagh, London,
          <br /> UK-800020
        </p>
        <p>
          <a href="tel:+91-9876543210">
            <i className="las la-phone-volume"></i> : +91-9876543210
          </a>
        </p>
        <p>
          <a href="mailto:help@instantorder.com">
            <i className="las la-envelope"></i> : help@instantorder.com
          </a>
        </p>
      </div>
    </div>
  );
}
