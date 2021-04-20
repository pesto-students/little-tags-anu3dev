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
        firebase.user(authUser.user.uid).set({
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
    <div className="subBar row">
      <div className="subBarLeft col-lg-3 col-md-3">
        <Link to={ROUTES.HOME}>Instant Order</Link>
      </div>

      <div className="subBarMiddle col-lg-4 col-md-4">
        <input type="text" placeholder="Search products" />
      </div>
      <div className="subBarRight col-lg-5 col-md-5">
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
                Hello {user.authUser === null ? "Guest" : user.authUser.username.split(" ")[0]}
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
                    <button className="logoutBtn" href="." onClick={handleSignOut}>
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
                {/* <button className="loginBtnSocialGoogle" href="." onClick={handleGoogleSignIn}>
                  <img
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                  Login with Google
                </button> */}
                <button className="loginBtn loginBtn--google" onClick={handleGoogleSignIn}>
                  Login with Google
                </button>
                <button className="loginBtn loginBtn--facebook" onClick={handleFacebookSignIn}>
                  Login with Facebook
                </button>
                <br />
                {user.authUser === null ? (
                  ""
                ) : (
                  <button className="logoutBtn logoutBtnText" href="." onClick={handleSignOut}>
                    <i className="las la-sign-out-alt"></i>Logout
                  </button>
                )}

                <span className="errorLog">{!!errorMessage && <p>{errorMessage}</p>}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(SubBar);
// demo text
