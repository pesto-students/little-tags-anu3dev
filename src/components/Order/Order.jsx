import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "../Firebase/context";
import ProductsPagination from "../ProductsList/ProductsPagination";
import "./Order.scss";

const DATA_LIMIT = 8;

export default function Order() {
  const firebase = useContext(FirebaseContext);
  const [orderList, setOrderList] = useState([]);
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;
  useEffect(() => {
    if (authUser) {
      firebase.getOrderData(authUser.uid).then((snapshot) => {
        let order = snapshot.val();
        for (let i in order) {
          for (let j of order[i]) {
            setOrderList((arr) => [...arr, j]);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="orderPage">
      <div className="orderHeader">
        <h2>YOUR ORDER </h2>
      </div>
      {orderList.length > 0 ? (
        <>
          <ProductsPagination data={orderList} dataLimit={DATA_LIMIT} />
        </>
      ) : (
        <h1>No orders to display.</h1>
      )}
    </div>
  );
}
