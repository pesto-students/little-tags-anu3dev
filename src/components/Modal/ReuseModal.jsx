import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../common/Routes";
import "./ReuseModal.scss";

function Modal(props) {
  const firebase = useContext(FirebaseContext);
  const userPresent = useSelector((state) => state.sessionState);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (userPresent.authUser) {
      props.close();
    }
  });

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
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).update({
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

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-1000px)",
      }}
    >
      <div className="modal-header">
        <p>Continue with social links</p>
        <span onClick={props.close} className="close-modal-btn">
          <i className="las la-times"></i>
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <button className="loginBtn loginBtn--google" onClick={handleGoogleSignIn}>
            Login with Google
          </button>
          <br />
          <button className="loginBtn loginBtn--facebook" onClick={handleFacebookSignIn}>
            Login with Facebook
          </button>
          <span className="errorLog">{!!errorMessage && <p>{errorMessage}</p>}</span>
        </div>
        <div className="modal-footer">
          <button onClick={props.close} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Modal);
