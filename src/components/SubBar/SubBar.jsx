import React, { useState } from "react";
import "./SubBar.scss";
import { useHistory } from "react-router-dom";

const ENTER_KEYCHAR_CODE = 13;

function SubBar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const getData = () => {
    history.push(`/${searchText.toLowerCase()}`);
  };

  const handleDebouncedSearch = function (fn, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  const handleChangeSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
    const debounce = handleDebouncedSearch(getData, 2000);
    debounce();
  };

  const handleKeyPress = (event) => {
    if (event.charCode === ENTER_KEYCHAR_CODE) {
      getData();
    }
  };
  return (
    <div className="subBar row">
      <div className="subBarLeft col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>

      <div className="subBarRight col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <input
          type="search"
          placeholder="Search for products"
          onKeyUp={handleChangeSearch}
          onKeyPress={handleKeyPress}
        />
        <img
          className="search-icon"
          src="/images/search.svg"
          alt="Search Products"
        />
      </div>
    </div>
  );
}

export default SubBar;
