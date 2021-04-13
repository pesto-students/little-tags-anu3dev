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
          {location.productDetail.category}
          <i className="fa fa-angle-right arrowIcon"> </i>
        </Link>
        <div className="links">{location.productDetail.title}</div>
      </div>
      <div className="productDetailContent row">
        <div className="productDetailLeftp col-lg-4 col-md-4">
          <div className="imageScroll">
            <img
              className="leftImg"
              src={location.productDetail.src[index]}
              alt="product name"
            />
          </div>
          <div className="productImages">
            <ImagesThumb
              images={location.productDetail.src}
              tab={handleTab}
              imageRef={imageRef}
            />
          </div>
        </div>
        <div className="productDetailCenter  col-lg-6 col-md-6">
          <h1 className="title">{location.productDetail.title}</h1>
          <div className="rating">
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <span>( 9 )</span>
          </div>
          <p>
            <span>{location.productDetail.description}</span>
          </p>
          <div className="features">
            <i className="las la-check-double"></i> 100% Original Products{" "}
            <br />
            <i className="las la-check-double"></i> Free Delivery on order above
            Rs. 799 <br />
            <i className="las la-check-double"></i> Pay on delivery might be
            available <br />
            <i className="las la-check-double"></i> Easy 30 days returns and
            exchanges <br />
            <i className="las la-check-double"></i> Try & Buy might be available{" "}
            <br />
          </div>
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
        <div className="productDetailRight  col-lg-2 col-md-2">
          <div className="rightSec">
            <i className="las la-wallet"></i>
            <p>
              100% <br />
              Money back
            </p>
          </div>
          <div className="rightSec">
            <i className="las la-wallet"></i>
            <p>
              Non-contact <br /> shipping
            </p>
          </div>
          <div className="rightSec">
            <i className="las la-wallet"></i>
            <p>
              Free delivery for <br />
              order over $200
            </p>
          </div>
          <h4>We accept:</h4>
          <div className="payIcon">
            <i class="lab la-cc-mastercard"></i>
            <i class="lab la-cc-paypal"></i>
            <i class="lab la-cc-visa"></i>
            <i class="lab la-cc-stripe"></i>
            <i class="lab la-cc-apple-pay"></i>
            <i class="lab la-amazon-pay"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
