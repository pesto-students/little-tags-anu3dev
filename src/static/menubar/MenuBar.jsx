import React from "react";
import "./MenuBar.scss";

export default function MenuBar() {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <a href="."><i className="las la-bars"></i></a>
        </li>
        <li><a href=".">Mens Wear</a></li>
        <li><a href=".">Womens Wear</a></li>
        <li><a href=".">Beauty Care</a></li>
        <li><a href=".">Jewellery</a></li>
        <li><a href=".">Electronics</a></li>
      </ul>
    </div>
  );
}
