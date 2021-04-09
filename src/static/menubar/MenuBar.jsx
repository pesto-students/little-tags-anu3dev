import React from "react";
import "./MenuBar.scss";

export default function MenuBar() {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <a href="."><i className="las la-bars"></i></a>
        </li>
        <li><a href="."> Grocery</a></li>
        <li><a href=".">Fashion</a></li>
        <li><a href=".">Sports</a></li>
        <li><a href=".">Books</a></li>
        <li><a href=".">Beauty</a></li>
        <li><a href=".">Electronics</a></li>
      </ul>
    </div>
  );
}
