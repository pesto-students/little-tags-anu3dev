import React from "react";
import "./TopBar.scss";

export default function TopBar() {
    
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <p>Due to the COVID 19 epidemic, orders may be processed with delay.</p>
      </div>
      <div className="topBarRight">
        <div className="topBarRightOne">
          <ul>
            <li>Order Tracking</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="topBarRightTwo">
          <ul>
            <li>
              <i className="lab la-facebook-f"></i>
            </li>
            <li>
              <i className="lab la-instagram"></i>
            </li>
            <li>
              <i className="lab la-youtube"></i>
            </li>
            <li>
              <i className="lab la-pinterest"></i>
            </li>
            <li>
              <i className="lab la-linkedin-in"></i>
            </li>
          </ul>
        </div>
        <div className="topBarRightThree">
          <ul>
            <li>English</li>
            <li>INR</li>
          </ul>
        </div>
        <div className="topBarRightFour">
          <ul>
            <li>
              <i className="las la-times"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
