import React from "react";
import "./SubBar.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../common/Routes";

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
            {/* <li><a href="tel:+91-9876543210"><i className="las la-phone-volume"></i> +91-9876543210</a></li> */}
            <li>
              <input type="text" placeholder="Search for products" />
            </li>
          </ul>
        </div>
        <div className="subBarRightTwo">
          <ul>
            <li>
              <a href="." data-toggle="modal" data-target="#myModal">
                <i className="las la-user"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="las la-heart"></i>
              </a>
            </li>
            <li>
              <Link to={ROUTES.CARTDEMO}>
                <i className="las la-shopping-cart"></i>
              </Link>
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
              <button type="button" className="btn1 btnWidth">
                Login with facebook
              </button>
              <br />
              <button type="button" className="btn1 btnWidth">
                Login with google
              </button>
              <br />
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
              </button>
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
              <button type="button" className="btn1 btnWidth">
                SignUp with facebook
              </button>
              <br />
              <button type="button" className="btn1 btnWidth">
                SignUp with google
              </button>
              <br />
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
          </div>
        </div>
      </div>
    </div>
  );
}
