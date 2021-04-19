import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../common/Util";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();

    this.auth = app.auth();

    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);
  doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);

  user = (uid) => this.db.ref(`/users/${uid}`);

  doSignOut = () => this.auth.signOut();

  onAuthChangeListener = (next, fallback = () => {}) => {
    return this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            const user = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser,
            };
            next(user);
          });
      } else {
        fallback();
      }
    });
  };
  addCartToUser = (cartItems, userId) => {
    let oldCartKey = getDataFromLocalStorage("cartKey");
    let updates = {};
    if (!oldCartKey) {
      oldCartKey = this.db.ref().child("cart").push().key;
      setDataToLocalStorage("cartKey", oldCartKey);
    }
    updates["/users/" + userId + "/" + oldCartKey] = { cart: cartItems };

    return this.db.ref().update(updates);
    //return console.log("firebase update to user: ", userId);
  };

  getCartOfUser = (userId) => {
    return this.db.ref
      .child("users")
      .child(userId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export default Firebase;
