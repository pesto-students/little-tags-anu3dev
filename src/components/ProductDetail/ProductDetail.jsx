import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { Link, useParams } from "react-router-dom";
import ImagesThumb from "./ImagesThumb";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions";
import ProductsData from "../common/data/products.json";

export default function ProductDetail() {
  const productObj = useParams();
  const [index, setIndex] = useState(0);
  const imageRef = React.createRef();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  let productDetail = ProductsData.find((product) => {
    return product.id === Number(productObj.productId);
  });

  const handleTab = (index) => {
    setIndex(index);
    const images = imageRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const handleAddToCart = () => {
    productDetail.quantity = Number(quantity);
    dispatch(addToCart(productDetail));
  };
  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
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
        <Link className="links" to={"/products/" + productDetail.category}>
          {productDetail.category}
          <i className="fa fa-angle-right arrowIcon"> </i>
        </Link>
        <div className="links">{productDetail.title}</div>
      </div>
      <div className="productDetailContent row">
        <div className="productDetailLeftp col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="imageScroll">
            <img className="leftImg" src={productDetail.src[index]} alt="product name" />
          </div>
          <div className="productImages">
            <ImagesThumb images={productDetail.src} tab={handleTab} imageRef={imageRef} />
          </div>
        </div>
        <div className="productDetailCenter  col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <h1 className="title">{productDetail.title}</h1>
          <div className="rating">
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <span>( 9 )</span>
          </div>
          <p>
            <span>{productDetail.description}</span>
          </p>
          <div className="features">
            <i className="las la-check-double"></i> 100% Original Products <br />
            <i className="las la-check-double"></i> Free Delivery on order above Rs. 799 <br />
            <i className="las la-check-double"></i> Pay on delivery might be available <br />
            <i className="las la-check-double"></i> Easy 30 days returns and exchanges <br />
            <i className="las la-check-double"></i> Try & Buy might be available <br />
          </div>
          <p>
            <strong>Price: </strong>
            <span>₹ {productDetail.price}</span>
          </p>
          <p>
            <strong>Status:</strong> <span> In Stock</span>
          </p>
          <p>
            <strong> Quantity</strong>
            <select className="qtySelect" value={quantity} onChange={handleChangeQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <Link to={"/cart"}>
            <button className="addToCart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </Link>
        </div>
        <div className="productDetailRight  col-xl-2 col-lg-2">
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
            <i className="lab la-cc-mastercard"></i>
            <i className="lab la-cc-paypal"></i>
            <i className="lab la-cc-visa"></i>
            <i className="lab la-cc-stripe"></i>
            <i className="lab la-cc-apple-pay"></i>
            <i className="lab la-amazon-pay"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
