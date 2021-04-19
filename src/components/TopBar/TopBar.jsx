import React from "react";
import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="topBar" id="accordion">
      <div id="collapseOne" className="collapse show topBarSub" data-parent="#accordion">
        <div className="topBarLeft">
          <p>Due to the COVID 19 epidemic, orders may be processed with delay.</p>
        </div>
        <div className="topBarRight">
          <div className="topBarRightOne">
            <ul>
              <li>
                <a href="."> Order Tracking</a>
              </li>
              <li>
                <a href=".">Blog</a>
              </li>
            </ul>
          </div>
          <div className="topBarRightTwo">
            <ul>
              <li>
                <a href=".">
                  <i className="lab la-facebook-f"></i>{" "}
                </a>
              </li>
              <li>
                <a href=".">
                  <i className="lab la-instagram"></i>{" "}
                </a>
              </li>
              <li>
                <a href=".">
                  <i className="lab la-youtube"></i>{" "}
                </a>
              </li>
              <li>
                <a href=".">
                  <i className="lab la-pinterest"></i>{" "}
                </a>
              </li>
              <li>
                <a href=".">
                  <i className="lab la-linkedin-in"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="topBarRightThree">
            <ul>
              <li>
                <a href=".">English</a>
              </li>
              <li>
                <a href=".">INR</a>
              </li>
            </ul>
          </div>
          <div className="topBarRightFour">
            <ul>
              <li>
                <a data-toggle="collapse" href="#collapseOne">
                  <i className="las la-times"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
