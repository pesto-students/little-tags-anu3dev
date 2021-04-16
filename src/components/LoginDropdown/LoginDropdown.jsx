import React, { useState } from "react";
import "./LoginDropdown.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../common/Routes";

function LoginDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li>
          <Link
            className="dropdown-link"
            to={ROUTES.A}
            onClick={() => setClick(false)}
          >
            Amlijgl
          </Link>
          <Link
            className="dropdown-link"
            to={ROUTES.B}
            onClick={() => setClick(false)}
          >
            Bkl/n;
          </Link>
          <Link
            className="dropdown-link"
            to={ROUTES.C}
            onClick={() => setClick(false)}
          >
            Ckhil
          </Link>
        </li>
      </ul>
    </>
  );
}

export default LoginDropdown;
