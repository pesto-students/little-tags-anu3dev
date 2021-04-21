import React from "react";
import "./SubBar.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../common/Routes";

function SubBar() {
  return (
    <div className="subBar row">
      <div className="subBarLeft col-lg-6 col-md-6">
        <Link to={ROUTES.HOME}>Instant Order</Link>
      </div>

      <div className="subBarRight col-lg-6 col-md-6">
        <input type="text" placeholder="Search products" />
      </div>
    </div>
  );
}

export default SubBar;
