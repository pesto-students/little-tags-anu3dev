import React, { useState } from "react";
import "./SubBar.scss";
import { useHistory, Link } from "react-router-dom";
import { HOME } from "../common/Routes";

const ENTER_KEYCHAR_CODE = 13;

function SubBar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.charCode === ENTER_KEYCHAR_CODE) {
      if (!searchText) {
        setSearchText("all");
      }
      history.push(`/${searchText.toLowerCase()}`);
    }
  };
  return (
    <div className="subBar row">
      <div className="subBarLeft col-lg-6 col-md-6">
        <Link to={HOME}>Instant Order</Link>
      </div>

      <div className="subBarRight col-lg-6 col-md-6">
        <input
          type="search"
          placeholder="Search for products"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default SubBar;
