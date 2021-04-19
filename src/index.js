import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FirebaseContext from "./components/Firebase/context";
import Firebase from "./components/Firebase/firebase";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "../src/redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
