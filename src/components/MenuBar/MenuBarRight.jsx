import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../common/ProductCategories";
import "./MenuBar.scss";

export default function MenuBarRight() {
  return (
    <div className="menuBarRightUl">
      <ul>
        <li>
          <div className="dropdown">
            <a href="." className="dropdown-toggle" data-toggle="dropdown">
              CLOTHING
            </a>
            <div className="dropdown-menu">
              <Link
                to={"/products/" + PATHS.MENS_CLOTHING}
                className="dropdown-item"
              >
                MENS WEAR
              </Link>
              <Link
                to={"/products/" + PATHS.WOMENS_CLOTHING}
                className="dropdown-item"
              >
                WOMENS WEAR
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <a href="." className="dropdown-toggle" data-toggle="dropdown">
              JEWELLERY
            </a>
            <div className="dropdown-menu">
              <Link
                to={"/products/" + PATHS.JEWELLERY}
                className="dropdown-item"
              >
                RING
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <a href="." className="dropdown-toggle" data-toggle="dropdown">
              ELECTRONICS
            </a>
            <div className="dropdown-menu">
              <Link
                to={"/products/" + PATHS.ELECTRONICS}
                className="dropdown-item"
              >
                HARD DISK
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <a href="." className="dropdown-toggle" data-toggle="dropdown">
              BEAUTY
            </a>
            <div className="dropdown-menu">
              <Link
                to={"/products/" + PATHS.ELECTRONICS}
                className="dropdown-item"
              >
                MAKEUP
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
