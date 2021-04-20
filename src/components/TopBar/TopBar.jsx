import React from "react";
import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="topBar" id="accordion">
      <div id="collapseOne" className="collapse show topBarSub row" data-parent="#accordion">
        <div className="topBarLeft col-md-6 col-lg-6">
          <p>Due to the COVID 19 epidemic, orders may be processed with delay.</p>
        </div>
        <div className="topBarRight col-md-6 col-lg-6">
          <a data-toggle="collapse" href="#collapseOne">
            <i className="las la-times"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
