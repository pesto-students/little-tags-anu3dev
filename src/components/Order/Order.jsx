import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "../Firebase/context";
import OrdersPagination from "./OrdersPagination";
import "./Order.scss";
import { formatDate } from "../common/Util";

const DATA_LIMIT = 6;

export default function Order() {
  const firebase = useContext(FirebaseContext);
  const [orderList, setOrderList] = useState([]);
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;
  useEffect(() => {
    if (authUser) {
      firebase.getOrderData(authUser.uid).then((snapshot) => {
        const order = snapshot.val();
        for (let i in order) {
          for (let j of order[i]) {
            const { id, title, description, category, image, price } = j;
            setOrderList((arr) => [
              ...arr,
              {
                orderDate: formatDate(i),
                id,
                title,
                description,
                category,
                price,
                image,
              },
            ]);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="orderPage">
      <div className="orderHeader">
        <h2>YOUR ORDERS </h2>
      </div>
      {orderList.length > 0 ? (
        <>
          <OrdersPagination data={orderList} dataLimit={DATA_LIMIT} />
        </>
      ) : (
        <h1>No orders to display.</h1>
      )}
    </div>
  );
}
