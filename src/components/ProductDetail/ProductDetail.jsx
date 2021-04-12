import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { Link, useLocation } from "react-router-dom";
import ImagesThumb from "./ImagesThumb";

export default function ProductDetail() {
  let location = useLocation();
  const [index, setIndex] = useState(0);
  const imageRef = React.createRef();

  const handleTab = (index) => {
    setIndex(index);
    const images = imageRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    imageRef.current.children[index].className = "active";
    // eslint-disable-next-line
  }, []);
  return (
    <div className="productScreen">
      <div className="navLinks">
        <Link className="links" to={"/"}>
          Home
          <i className="fa fa-angle-right arrowIcon"> </i>
        </Link>
        <Link
          className="links"
          to={"/productsList/" + location.productDetail.category}
        >
          Category
          <i className="fa fa-angle-right arrowIcon"> </i>
        </Link>
        <div className="links">{location.productDetail.title}</div>
      </div>
      <div className="productDetailContent">
        <div className="productDetailLeft">
          <img
            className="leftImg"
            src={location.productDetail.src[index]}
            alt="product name"
          />
        </div>
        <div className="productDetailCenter">
          <p className="title">{location.productDetail.title}</p>
          <p>
            <strong>Price: </strong>
            <span>$ {location.productDetail.price}</span>
          </p>
          <p>
            <strong>Status:</strong> <span> In Stock</span>
          </p>
          <p>
            <strong> Quantity</strong>
            <select className="qtySelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <button className="addToCart">Add To Cart</button>
        </div>
      </div>
      <div className="productImages">
        <ImagesThumb
          images={location.productDetail.src}
          tab={handleTab}
          imageRef={imageRef}
        />
      </div>
    </div>
  );
}
