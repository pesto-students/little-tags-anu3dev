import React, { useEffect, useContext } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../../redux/actions/CartActions";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../common/Routes";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext);
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;

  useEffect(() => {
    if (authUser) {
      firebase.addCartToUser(cartItems, authUser.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
        <div className="col-lg-8 col-xl-8 ">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div className="row cartSmallSec" key={idx}>
                <img
                  className="col-lg-4 col-xl-4 cartImage"
                  src={item.image}
                  alt={item.title}
                />
                <div className="col-lg-4 col-xl-4 cartDetail">
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
                </div>
                <h3 className="col-lg-2 col-xl-2 cartPrice">$ {item.price}</h3>
              </div>
            ))
          ) : (
            <h1>Your cart is empty!</h1>
          )}
        </div>
        <div className="col-lg-4 col-xl-4 cartCheckout">
          <div>
            <h3>Subtotal ({getCartCount()}) items:</h3>
          </div>
          <div>
            <h3> $ {getCartSubTotal()}</h3>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <Link
              to={ROUTES.CHECKOUT}
              className="btn btn-success checkoutButton"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
