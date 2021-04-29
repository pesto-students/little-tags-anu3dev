import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../common/ProductCategories";
import "./HamburgerSubMenu.scss";

export default function HamburgerSubMenu({ handleClick }) {
  return (
    <div className="subMenu">
      <button onClick={handleClick}>&times;</button>
      <ul>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.MENS_CLOTHING} className="menuItem">
              MENS WEAR
            </Link>{" "}
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link
              to={"/products/" + PATHS.WOMENS_CLOTHING}
              className="menuItem"
            >
              WOMENS WEAR
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.JEWELLERY} className="menuItem">
              JEWELLERY
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.ELECTRONICS} className="menuItem">
              ELECTRONICS
            </Link>
          </div>
        </li>
        <li>
          <div className="menu" onClick={handleClick}>
            <Link to={"/products/" + PATHS.ELECTRONICS} className="menuItem">
              BEAUTY
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
