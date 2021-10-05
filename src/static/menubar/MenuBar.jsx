import React from "react";
import "./MenuBar.scss";

export default function MenuBar() {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <i className="las la-bars"></i>
        </li>
        <li>Grocery</li>
        <li>Fashion</li>
        <li>Sports</li>
        <li>Books</li>
        <li>Beauty</li>
        <li>Electronics</li>
      </ul>
    </div>
  );
}
