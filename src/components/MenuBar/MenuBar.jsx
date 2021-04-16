import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import {
  MENS_CLOTHING,
  WOMENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
} from "../common/ProductCategories";
import * as ROUTES from "../common/Routes";

function MenuBar(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.doSignOut();
  };
  return (
    <div className="menuBar">
      <ul>
        <li>
          <a href=".">
            <i className="las la-bars"></i>
          </a>
        </li>
        <li>
          <Link to={"/productsList/" + MENS_CLOTHING}>Mens Wear</Link>
        </li>
        <li>
          <Link to={"/productsList/" + WOMENS_CLOTHING} href=".">
            Womens Wear
          </Link>
        </li>
        <li>
          <Link to={"/productsList/" + JEWELLERY}>Beauty Care</Link>
        </li>
        <li>
          <Link to={"/productsList/" + JEWELLERY}>Jewellery</Link>
        </li>
        <li>
          <Link to={"/productsList/" + ELECTRONICS}>Electronics</Link>
        </li>
        <li>
          <button onClick={handleGoogleSignIn}>Google </button>
        </li>
        <li>
          <button onClick={handleFacebookSignIn}>Fb </button>
        </li>
        <li>
          <button onClick={handleSignOut}>Logout</button>
          {!!errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </li>
      </ul>
    </div>
  );
}

export default withRouter(MenuBar);
