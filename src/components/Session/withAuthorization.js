import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../common/Routes";

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const next = (authUser) => {
      if (!authUser) {
        props.history.push(ROUTES.CART);
      }
    };
    const fallback = () => props.history.push(ROUTES.CART);
    useEffect(() => {
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <p>You need to sign in to access this page </p>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
