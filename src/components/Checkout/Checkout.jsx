import React, { useEffect, useContext } from "react";
import "./Checkout.scss";
import withAuthorization from "../Session/withAuthorization";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/CartActions";
import FirebaseContext from "../Firebase/context";
import { useHistory } from "react-router-dom";
import { ORDER } from "../common/Routes";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const { cartItems } = cart;
  const totalPrice = cartItems
    .reduce((price, item) => price + item.price * item.quantity, 0)
    .toFixed(2);
  const totalPayblePrice = Math.ceil(totalPrice) * 100;
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;
  const handleCheckout = () => {
    if (authUser) {
      firebase.setOrderData(authUser.uid, cartItems);
      dispatch(clearCart());
      firebase.addCartToUser({}, authUser.uid);
    }
  };
  const options = {
    key: "rzp_test_cSeVaU8dO6fr4U",
    amount: totalPayblePrice,
    name: "Instant Order",
    description: "India's leading E-Commerce Startup",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    // callback_url: ".",
    handler: function (response) {
      handleCheckout();
      alert(`Your Payment ID: ${response.razorpay_payment_id}`);
      history.push(ORDER);
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="checkoutPage">
      <h1>Delivery Address: </h1>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-lg-6  col-sm-12 col-12">
          <div className="addressSectionLeft">
            <div className="addressBox">
              <input type="radio" name="1" value="1" />
              <label htmlFor="1">
                <h6 className="addressHeading">
                  Home +91-9990100321
                  <i className="las la-edit editBtn"></i>
                </h6>
                <h6>
                  house no 26, jalam mohalla, tughlakabad village, new delhi, tughlakabad village,
                  New Delhi, Delhi
                </h6>
              </label>
            </div>
            <div className="addressBox">
              <input type="radio" name="1" value="2" checked="checked" />
              <label htmlFor="1">
                <h6 className="addressHeading">
                  Office +91-8595004299
                  <i className="las la-edit editBtn"></i>
                </h6>
                <h6>house no AF06, Vindhyachal apartment, chennai,TamilNadu</h6>
              </label>
            </div>
            <div className="addressBox">
              <input type="radio" name="1" value="3" />
              <label htmlFor="1">
                <h6 className="addressHeading">
                  Office +91-9698942300
                  <i className="las la-edit editBtn"></i>{" "}
                </h6>
                <h6>Flat No: 18, New Perungalathur, Bannarghatta,Bangalore,Karnataka</h6>
              </label>
            </div>
          </div>
          <button onClick={openPayModal} className="razorPayBtn">
            Pay with Razorpay
          </button>
        </div>
        <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="addressSectionRight">
            <div className="halfInput">
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Mobile Number" />
            </div>
            <div className="halfInput">
              <input type="number" placeholder="Pincode" />
              <input type="text" placeholder="Locality" />
            </div>
            <div className="inputTextAreaDiv">
              <textarea
                name=""
                className="inputTextArea"
                placeholder="Your address"
                rows="3"
              ></textarea>
            </div>
            <div className="halfInput">
              <input type="text" placeholder="City/District/Town" />
              <input type="text" placeholder="State" />
            </div>
            <div className="halfInput">
              <input type="text" placeholder="Landmark(Optional)" />
              <input type="text" placeholder="Alternate Phone(Optional)" />
            </div>
            <div className="halfRadio">
              <input type="radio" name="1" />
              <label htmlFor="1">Home (All day delivery)</label>
              <br />
              <input type="radio" name="1" />
              <label htmlFor="1">Office (Delivery between 10 AM to 5 PM)</label>
            </div>
            <div className="newAddress">
              <a href=".">Add new address</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthorization(Checkout);
