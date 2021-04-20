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
    <div className="menuBar row">
      <div className="col-md-12 col-lg-12">
        <ul>
          <li>
            <a href=".">
              <i className="las la-bars"></i>
            </a>
          </li>
          <li>
            <div className="dropdown">
              <a href="." className="dropdown-toggle" data-toggle="dropdown">
                Clothing
              </a>
              <div className="dropdown-menu">
                <Link to={"/products/" + MENS_CLOTHING} className="dropdown-item">
                  Mens Wear
                </Link>
                <Link to={"/products/" + WOMENS_CLOTHING} className="dropdown-item">
                  Womens Wear
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="." className="dropdown-toggle" data-toggle="dropdown">
                Jewellery
              </a>
              <div className="dropdown-menu">
                <Link to={"/products/" + JEWELLERY} className="dropdown-item">
                  Ring
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="." className="dropdown-toggle" data-toggle="dropdown">
                Electronics
              </a>
              <div className="dropdown-menu">
                <Link to={"/products/" + ELECTRONICS} className="dropdown-item">
                  Hard Disk
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="." className="dropdown-toggle" data-toggle="dropdown">
                Beauty
              </a>
              <div className="dropdown-menu">
                <Link to={"/products/" + ELECTRONICS} className="dropdown-item">
                  Makeup
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
