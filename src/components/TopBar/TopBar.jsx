import React from "react";
import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="topBar" id="accordion">
      <div
        id="collapseOne"
        className="row collapse show topBarContent"
        data-parent="#accordion"
      >
        <div className="col-md-11 col-lg-11">
          <div className="d-flex justify-content-center topBarLeft ">
            <a href=".">
              Due to the COVID 19 epidemic, orders may be processed with delay.
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center topBarRight col-md-1 col-lg-1">
          <a data-toggle="collapse" href="#collapseOne">
            <i className="las la-times"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
