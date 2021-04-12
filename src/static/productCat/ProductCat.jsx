import React from "react";
import "./ProductCat.scss";
import { Link } from "react-router-dom";
import {
  MENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
  WOMENS_CLOTHING,
  KIDS_CLOTHING,
} from "../../components/common/Routes";

export default function ProductCat() {
  return (
    <div className="productCat">
      <h1>Product Categories</h1>
      <div className="row">
        <div className="productCatTop col-lg-6 col-md-6">
          <img src="/images/MensClothing_1.jpg" alt="men" />
          <p className="onTextButton">Styles for Men</p>
          <Link
            className="onImageButton btn"
            to={"/productsList/" + MENS_CLOTHING}
          >
            Browse Products
          </Link>
        </div>
        <div className="productCatTop col-lg-6 col-md-6">
          <img src="/images/Jewellery_1.jpg" alt="jewellery" />
          <p className="onTextButton">Jewellery</p>
          <Link className="onImageButton btn" to={"/productsList/" + JEWELLERY}>
            Browse Products
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/images/Electronics_1.png" alt="" />
          <p className="onTextButtonSmall">Electronics</p>
          <Link
            className="onImageButtonSmall btn"
            to={"/productsList/" + ELECTRONICS}
          >
            Browse Products
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/images/Womensclothing_1.jpg" alt="" />
          <p className="onTextButtonSmall">Style for Women</p>
          <Link
            className="onImageButtonSmall btn"
            to={"/productsList/" + WOMENS_CLOTHING}
          >
            Browse Products
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/images/Kids_1.jpg" alt="" />
          <p className="onTextButtonSmall">Kids</p>
          <Link
            className="onImageButtonSmall btn"
            to={"/productsList/" + KIDS_CLOTHING}
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
