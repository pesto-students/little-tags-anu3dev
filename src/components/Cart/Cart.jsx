import React, { useState, useContext } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../constants/CartActions";
import FirebaseContext from "../Firebase/context";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("cartItems: ", cartItems);
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    firebase
      .removeFromCart(id)
      .then(() => console.log("product removed from cart"))
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cartScreen">
      <div className="row ">
        <Link className="cartLink" to={"/"}>
          Continue Shopping
        </Link>
      </div>
      <div className="row cartHeader ">
        <h2 className="col-lg-12 col-md-12 ">YOUR CART </h2>
      </div>
      <div className="row cartItem">
        <div className="col-lg-9 col-md-9 ">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div className="row" key={idx}>
                <img
                  className="col-lg-2 col-md-3 cartImage"
                  src={item.image}
                  alt={item.title}
                />
                <div className="col-lg-4 col-md-4 cartDetail">
                  <Link to={{ pathname: "/product/", productDetail: item }}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      handleRemoveFromCart(item.id);
                    }}
                  >
                    Remove
                  </button>
                  <span>{errorMessage}</span>
                </div>
                <p className="col-lg-1 col-md-1 cartPrice">${item.price}</p>
              </div>
            ))
          ) : (
            <h1>Your cart is empty!</h1>
          )}
        </div>
        <div className="col-lg-93 col-md-3 cartCheckout">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
          <div>
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
