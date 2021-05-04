import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../common/ProductCategories";
import "./HamburgerSubMenu.scss";

export default function HamburgerSubMenu({ handleClick }) {
  return (
    <div className="subMenu">
      <button className="subMenuBtn" onClick={handleClick}>
        &times;
      </button>
      <ul>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.MENS_CLOTHING} className="menuItem">
              Mens Wear
            </Link>{" "}
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link
              to={"/products/" + PATHS.WOMENS_CLOTHING}
              className="menuItem"
            >
              Womens Wear
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.JEWELLERY} className="menuItem">
              Jewellery
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.ELECTRONICS} className="menuItem">
              Electronics
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.ELECTRONICS} className="menuItem">
              Beauty
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={PATHS.ORDER} className="menuItem">
              Order History
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
