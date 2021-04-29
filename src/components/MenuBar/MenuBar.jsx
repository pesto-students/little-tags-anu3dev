import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import { useSelector, useDispatch } from "react-redux";
import "./MenuBar.scss";
import * as ROUTES from "../common/Routes";
import { addToCart, clearCart } from "../../redux/actions/CartActions";
import { resetAuthUser } from "../../redux/actions/index";
import MenuBarRight from "./MenuBarRight";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function MenuBar(props) {
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
        if (authUser.additionalUserInfo.isNewUser) {
          firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            username: authUser.user.displayName,
            roles: {},
          });
        }
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
        if (authUser.additionalUserInfo.isNewUser) {
          firebase.user(authUser.user.uid).set({
            email: authUser.user.email,
            username: authUser.user.displayName,
            roles: {},
          });
        }
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
    <>
      <nav className="sticky-top fixed-top navBarComp">
        <div className="menuBar row">
          <div className="menuBarLeft col-md-7 col-lg-7">
            <ul>
              <li>
                <HamburgerMenu />
              </li>
              <div className="title">
                <Link to={ROUTES.HOME}>Instant Order</Link>
              </div>
              <MenuBarRight />
            </ul>
          </div>
          <div className="menuBarRight col-md-5 col-lg-5">
            <ul>
              <li>
                <Link to={"/cart"} className="userTextRight">
                  <i className="las la-shopping-cart menuBarRightBar"></i>
                  <span>CART({getCartCount()})</span>
                </Link>
              </li>
              <li>
                <a href="." className="userTextRight">
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
                  <a
                    href="."
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="las la-sign-in-alt"></i>
                    <span>
                      {user.authUser === null ? (
                        "Login"
                      ) : (
                        <button
                          className="logoutBtn"
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
                    {/* <button className="loginBtnSocialGoogle" href="." onClick={handleGoogleSignIn}>
                  <img
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                  Login with Google
                </button> */}
                    <button
                      className="loginBtn loginBtn--google"
                      onClick={handleGoogleSignIn}
                    >
                      Login with Google
                    </button>
                    <button
                      className="loginBtn loginBtn--facebook"
                      onClick={handleFacebookSignIn}
                    >
                      Login with Facebook
                    </button>
                    <br />
                    {user.authUser === null ? (
                      ""
                    ) : (
                      <button
                        className="logoutBtn logoutBtnText"
                        href="."
                        onClick={handleSignOut}
                      >
                        <i className="las la-sign-out-alt"></i>Logout
                      </button>
                    )}

                    <span className="errorLog">
                      {!!errorMessage && <p>{errorMessage}</p>}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(MenuBar);
