import React from "react";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import {
  MENS_CLOTHING,
  WOMENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
} from "../common/ProductCategories";

export default function MenuBar() {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <a href=".">
            <i className="las la-bars"></i>
          </a>
        </li>
        <li>
          <Link to={"/products/" + MENS_CLOTHING}>Mens Wear</Link>
        </li>
        <li>
          <Link to={"/products/" + WOMENS_CLOTHING} href=".">
            Womens Wear
          </Link>
        </li>
        <li>
          <Link to={"/products/" + JEWELLERY}>Beauty Care</Link>
        </li>
        <li>
          <Link to={"/products/" + JEWELLERY}>Jewellery</Link>
        </li>
        <li>
          <Link to={"/products/" + ELECTRONICS}>Electronics</Link>
        </li>
      </ul>
    </div>
  );
}
