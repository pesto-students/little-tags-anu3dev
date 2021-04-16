import React from "react";
import "./SubBar.scss";
import { Link } from "react-router-dom";
import * as ROUTES from '../common/Routes';

export default function SubBar() {
  return (
    <div className="subBar">
      <div className="subBarLeft">
        <div className="logo">
          <p>Instant order</p>
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
              <a href=".">
                <i className="las la-shopping-cart"></i>
              <span>Cart</span> </a>
            </li>
            <li>
            <div className="dropdown">
              <a href="." className="dropdown-toggle" id="dropdownMenu" data-toggle="dropdown" aria-expanded="false" >
                <i className="las la-user"></i>
                <span>Login</span>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <Link to={ROUTES.ACCOUNT} className="dropdown-item" ><i className="las la-user-alt"></i> Your Account</Link>
                  <a className="dropdown-item" href="."><i className="las la-gift"></i> Your Order</a>
                  <Link to={ROUTES.CARTDEMO} className="dropdown-item"><i className="las la-heart"></i> Wishlist</Link>
                  <hr className="hrLine"></hr>
                  <p className="dropdownText">If you are a new user</p>
                  <div className="btnMid">
                    <a href="." data-toggle="modal" data-target="#myModal1">Signup</a>
                  </div>
                  <div className="btnMid">
                    <a href="." data-toggle="modal" data-target="#myModal" className="btn">Login</a>
                  </div>
                  <hr className="hrLine"></hr>
                  <p className="dropdownText">With social links</p>
                  <ul>
                    <li><a href="."><i className="lab la-google-plus-g"></i></a></li>
                    <li><a href="."><i className="lab la-facebook"></i></a></li>
                    <li><a href="."><i className="lab la-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Welcome Back!</h1>
              <a href="." data-dismiss="modal">
                <i className="las la-times"></i>
              </a>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Enter Email" />
              <br />
              <input type="text" placeholder="Enter Password" />
              <br />
              <button type="button" className="btn1 btnWidth">
                Submit
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn1 btnFoot"
                data-toggle="modal"
                data-target="#myModal1"
              >
                SignUp
              </button>
              <button
                type="button"
                className="btn1 btnFoot"
                data-dismiss="modal"
              >
                Close
              </button >
            </div>
            <div className="popUpIcon">
              <p>With social media links</p>
              <ul>
                <li><a href="."><i className="lab la-google-plus-g"></i></a></li>
                <li><a href="."><i className="lab la-facebook"></i></a></li>
                <li><a href="."><i className="lab la-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">It's first time only!</h1>
              <a href="." data-dismiss="modal">
                <i className="las la-times"></i>
              </a>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Enter Full Name" />
              <input type="text" placeholder="Enter Email" />
              <br />
              <input type="text" placeholder="Enter Password" />
              <br />
              <button type="button" className="btn1 btnWidth">
                Submit
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn1 btnFoot"
                data-toggle="modal"
                data-target="#myModal1"
              >
                Login
              </button>
              <button
                type="button"
                className="btn1 btnFoot"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div className="popUpIcon">
              <p>With social media links</p>
              <ul>
                <li><a href="."><i className="lab la-google-plus-g"></i></a></li>
                <li><a href="."><i className="lab la-facebook"></i></a></li>
                <li><a href="."><i className="lab la-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
