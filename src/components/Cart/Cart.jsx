import React, { useState, useContext, useEffect } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/CartActions";
import FirebaseContext from "../Firebase/context";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    console.log("cartitems inside useEffect: ", cartItems);
    if (cartItems.length === 0) {
      console.log("cartitems 0 useEffect: ", cartItems);
      firebase
        .removeCartFromUser(authUser.uid)
        .then(() => {
          console.log("cart removed");
        })
        .catch((e) => {
          setErrorMessage(e.message);
        });
    } else {
      firebase
        .addCartToUser(cartItems, authUser.uid)
        .then(() => {
          console.log("cart updated");
        })
        .catch((e) => {
          setErrorMessage(e.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

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
        <div className="col-lg-8 col-md-8 ">
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
        <div className="col-lg-4 col-md-4 cartCheckout">
          <div className="row">
            <p>Subtotal ({getCartCount()}) items:</p>
          </div>
          <div className="row">
            <p> ${getCartSubTotal()}</p>
          </div>
          <div className="row">
            <button type="button" className="btn btn-danger">
              Clear Cart
            </button>
            <button type="button" className="btn btn-success checkoutButton">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
