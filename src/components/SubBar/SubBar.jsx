import React from 'react';
import './SubBar.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../common/Routes';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

export default function SubBar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.quantity) + qty, 0);
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
                <a href=".">
                  <i className="las la-shopping-cart"></i>
                  <span>Cart({getCartCount()})</span>
                </a>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <a href="." className="dropdown-toggle" data-toggle="dropdown">
                  <i className="las la-user"></i>
                  <span>Login</span>
                </a>
                <div className="dropdown-menu">
                  <hr className="hrLine"></hr>
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
                    <a
                      href="."
                      data-toggle="modal"
                      data-target="#myModal"
                      className="btn"
                    >
                      Login
                    </a>
                  </div>
                  <hr className="hrLine"></hr>
                  <p className="dropdownText">With social links</p>
                  <ul>
                    <li>
                      <a href=".">
                        <i className="lab la-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href=".">
                        <i className="lab la-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href=".">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
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
