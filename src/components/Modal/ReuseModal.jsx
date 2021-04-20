import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../common/Routes";
import "./ReuseModal.scss";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../redux/actions/CartActions";

function Modal(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const updateCartFromFirebase = (uid) => {
    firebase
      .getCartOfUser(uid)
      .then((cart) => {
        dispatch(clearCart());
        cart.map((item) => dispatch(addToCart(item)));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
        return updateCartFromFirebase(authUser.user.uid);
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
        firebase.user(authUser.user.uid).update({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
        return updateCartFromFirebase(authUser.user.uid);
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
          <div>
            <button className="logBtn" href="." onClick={handleGoogleSignIn}>
              <i className="lab la-google-plus-g"></i>
            </button>
          </div>
          <div>
            <button className="logBtn" href="." onClick={handleFacebookSignIn}>
              <i className="lab la-facebook"></i>
            </button>
          </div>
          <span className="errorLog">
            {!!errorMessage && <p>{errorMessage}</p>}
          </span>
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
