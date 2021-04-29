import React, { useState } from "react";
import "./HamburgerMenu.scss";
import HamburgerSubMenu from "./HamburgerSubMenu";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="burgerContainer" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {open ? <HamburgerSubMenu handleClick={handleClick} /> : null}
    </>
  );
}
