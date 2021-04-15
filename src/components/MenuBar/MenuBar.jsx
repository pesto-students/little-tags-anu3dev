import React, {useState, useContext} from "react";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import FirebaseContext from '../Firebase/context'
import {
  MENS_CLOTHING,
  WOMENS_CLOTHING,
  JEWELLERY,
  ELECTRONICS,
} from "../common/Routes";
import * as ROUTES from '../common/Routes';

export default function MenuBar(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
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
          <button onClick={handleGoogleSignIn}>Sign In with Google </button>
        </li>
        <li>
          <button onClick={handleSignOut}>Logout</button>
          {!!errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </li>
        <li>
          <Link to={ROUTES.CARTDEMO}>
            <i className="las la-shopping-cart"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
