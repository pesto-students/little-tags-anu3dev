import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import "./SubBar.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../common/Routes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../redux/actions/CartActions";
import { resetAuthUser } from "../../redux/actions/index";

function SubBar(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((state) => state.sessionState);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const updateCartFromFirebase = (uid) => {
    firebase
      .getCartOfUser(uid)
      .then((cart) => {
        dispatch(clearCart());
        cart.map((item) => dispatch(addToCart(item)));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).update({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
        return updateCartFromFirebase(authUser.user.uid);
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleSignOut = () => {
    firebase.doSignOut();
    dispatch(resetAuthUser());
    dispatch(clearCart());
  };

  return (
    <div className="subBar">
      <div className="subBarLeft">
        <div className="logo">
          <Link to={ROUTES.HOME}>Instant Order</Link>
        </div>
      </div>
      <div className="subBarRight">
        <div className="subBarRightOne">
          <ul>
            <li>
              <input type="text" placeholder="Search for products" />
            </li>
          </ul>
        </div>
        <div className="subBarRightTwo">
          <ul>
            <li>
              <Link to={"/cart"}>
                <i className="las la-shopping-cart"></i>
                <span>Cart({getCartCount()})</span>
              </Link>
            </li>
            <li>
              <a href=".">
                <i className="las la-user"></i>
                <span>
                  Hello{" "}
                  {user.authUser === null
                    ? "Guest"
                    : user.authUser.username.split(" ")[0]}
                </span>
              </a>
            </li>
            <li>
              <div className="dropdown">
                <a href="." className="dropdown-toggle" data-toggle="dropdown">
                  <i className="las la-sign-in-alt"></i>
                  <span>
                    {user.authUser === null ? (
                      "Login"
                    ) : (
                      <button
                        className="logBtn"
                        href="."
                        onClick={handleSignOut}
                      >
                        LogOut
                      </button>
                    )}
                  </span>
                </a>
                <div className="dropdown-menu">
                  <Link to={ROUTES.ACCOUNT} className="dropdown-item">
                    <i className="las la-user-alt"></i> Your Account
                  </Link>
                  <Link to={ROUTES.ORDER} className="dropdown-item">
                    <i className="las la-gift"></i> Your Order
                  </Link>
                  <Link to={ROUTES.WISHLIST} className="dropdown-item">
                    <i className="las la-heart"></i> Wishlist
                  </Link>
                  <hr className="hrLine"></hr>
                  <p className="dropdownText">Login with social links</p>
                  <ul>
                    <li>
                      <button
                        className="logBtn"
                        href="."
                        onClick={handleGoogleSignIn}
                      >
                        <i className="lab la-google-plus-g"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        className="logBtn"
                        href="."
                        onClick={handleFacebookSignIn}
                      >
                        <i className="lab la-facebook"></i>
                      </button>
                    </li>
                    <li>
                      {user.authUser === null ? (
                        ""
                      ) : (
                        <button
                          className="logBtn"
                          href="."
                          onClick={handleSignOut}
                        >
                          <i className="las la-sign-out-alt"></i>
                        </button>
                      )}
                    </li>
                  </ul>
                  <span className="errorLog">
                    {!!errorMessage && <p>{errorMessage}</p>}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SubBar);
