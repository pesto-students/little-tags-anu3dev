import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="container">
      <div className="closeIcon"></div>
      <div className="cartHeader">
        <h2>Shopping Cart </h2>
      </div>
      <div className="cartProducts">{cartItems}</div>
      <div className="cartTotal">Total</div>
      <div className="cartCheckout">Checkout</div>
    </div>
  );
}
