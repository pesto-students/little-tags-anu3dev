import React from 'react';
import './ProductCategory.scss';
import { Link } from 'react-router-dom';
import {
  MENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
  WOMENS_CLOTHING,
  KIDS_CLOTHING,
} from '../common/ProductCategories';

export default function ProductCat() {
  return (
    <div className="productCat">
      <h1>Product Categories</h1>
      <div className="row">
        <div className="productCatTop col-lg-6 col-md-6">
          <img src="/img/proD.png" alt="men" />
          <p className="onTextButton"></p>
          <Link className="onImageButton btn" to={'/productsList/' + MENS_CLOTHING}>
            Mens Wear
          </Link>
        </div>
        <div className="productCatTop col-lg-6 col-md-6">
          <img src="/img/proE.png" alt="jewellery" />
          <p className="onTextButton"></p>
          <Link className="onImageButton btn" to={'/productsList/' + WOMENS_CLOTHING}>
            Western Wear
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/img/proA.png" alt="" />
          <p className="onTextButtonSmall"></p>
          <Link className="onImageButtonSmall btn" to={'/productsList/' + KIDS_CLOTHING}>
            Beauty Care
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/img/proB.png" alt="" />
          <p className="onTextButtonSmall"></p>
          <Link className="onImageButtonSmall btn" to={'/productsList/' + JEWELLERY}>
            Jewellery
          </Link>
        </div>
        <div className="productCatBot col-lg-4 col-md-4">
          <img src="/img/proC.png" alt="" />
          <p className="onTextButtonSmall"></p>
          <Link className="onImageButtonSmall btn" to={'/productsList/' + ELECTRONICS}>
            Electronics
          </Link>
        </div>
      </div>
    </div>
  );
}
