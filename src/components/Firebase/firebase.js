import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

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
    let updates = {};
    updates["/users/" + userId + "/cart"] = { cartItems };
    this.db.ref().update(updates);
  };
  getCartOfUser = (userId) => {
    return this.db
      .ref("/users/" + userId + "/cart")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const { cartItems } = snapshot.val();
          return cartItems;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  setOrderData = (userId, products) => {
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    this.db.ref(`/users/${userId}/orders/${currentTimeStamp}/`).set(products);
  };

  getOrderData = async (userId) => {
    let ref = this.db.ref(`/users/${userId}/orders/`);
    return await ref.once("value");
  };
}

export default Firebase;
