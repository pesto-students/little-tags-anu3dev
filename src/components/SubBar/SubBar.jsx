import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import './SubBar.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../common/Routes';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

function SubBar(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const cart = useSelector((state) => state.cart);
  const [user] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { cartItems } = cart;
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
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
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
  const handleSignOut = () => {
    firebase.doSignOut();
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
              <Link to={'/cart'}>
                <i className="las la-shopping-cart"></i>
                <span>Cart({getCartCount()})</span>
              </Link>
            </li>
            <li>
              <a href=".">
                <i className="las la-user"></i>
                <span>Hello {!user ? 'Guest' : user.username.split(' ')[0]}</span>
              </a>
            </li>
            <li>
              <div className="dropdown">
                <a href="." className="dropdown-toggle" data-toggle="dropdown">
                  <i className="las la-sign-in-alt"></i>
                  <span>Login</span>
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
                  <p className="dropdownText">If you are a new user</p>
                  <div className="btnMid">
                    <a href="." data-toggle="modal" data-target="#myModal1">
                      Signup
                    </a>
                  </div>
                  <div className="btnMid">
                    <a href="." data-toggle="modal" data-target="#myModal" className="btn">
                      Login
                    </a>
                  </div>
                  <hr className="hrLine"></hr>
                  <p className="dropdownText">Login with social links</p>
                  <ul>
                    <li>
                      <button className="logBtn" href="." onClick={handleGoogleSignIn}>
                        <i className="lab la-google-plus-g"></i>
                      </button>
                    </li>
                    <li>
                      <button className="logBtn" href="." onClick={handleFacebookSignIn}>
                        <i className="lab la-facebook"></i>
                      </button>
                    </li>
                    <li>
                      <button className="logBtn" href="." onClick={handleSignOut}>
                        <i className="las la-sign-out-alt"></i>
                      </button>
                    </li>
                  </ul>
                  <span className="errorLog">{!!errorMessage && <p>{errorMessage}</p>}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default withRouter(SubBar);
