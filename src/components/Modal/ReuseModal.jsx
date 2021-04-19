import React, { useContext } from "react";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../common/Routes";
import "./ReuseModal.scss";

export const Modal = ({ show, close, props }) => {
  const firebase = useContext(FirebaseContext);
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
      });
  };
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
      });
  };

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-1000px)",
      }}
    >
      <div className="modal-header">
        <p>Continue with social links</p>
        <span onClick={close} className="close-modal-btn">
          <i className="las la-times"></i>
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <button className="logBtn" href="." onClick={handleGoogleSignIn}>
            <i className="lab la-google-plus-g"></i>
          </button>

          <button className="logBtn" href="." onClick={handleFacebookSignIn}>
            <i className="lab la-facebook"></i>
          </button>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
