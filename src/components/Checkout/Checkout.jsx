import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const totalPrice = cartItems
    .reduce((price, item) => price + item.price * item.quantity, 0)
    .toFixed(2);
  const totalPayblePrice = Math.ceil(totalPrice) * 100;

  const options = {
    key: "rzp_test_cSeVaU8dO6fr4U",
    amount: totalPayblePrice,
    name: "Instant Order",
    description: "India's leading E-Commerce Startup",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      alert(response.razorpay_payment_id);
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
    <div>
      <h1>Delivery Address: </h1>
      <button onClick={openPayModal}>Pay with Razorpay</button>
    </div>
  );
}

export default Checkout;
