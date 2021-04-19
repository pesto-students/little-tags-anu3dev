import React from "react";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import {
  MENS_CLOTHING,
  WOMENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
} from "../common/ProductCategories";
import ModalNew from "../Modal/ModalNew";

export default function MenuBar() {
  // const callModal = () => {
  //   const userVisitStatus = localStorage.getItem("userVisitStatus");
  //   console.log(userVisitStatus ? "" : localStorage.setItem("userVisitStatus", true) || Xyz());
  // };
  // const Xyz = () => {
  //   console.log("hi");
  // };
  return (
    <div>
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
          <li>
            <ModalNew />
          </li>
        </ul>
      </div>
    </div>
  );
}
