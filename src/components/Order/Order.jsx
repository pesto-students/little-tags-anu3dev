import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirebaseContext from "../Firebase/context";
import ProductsPagination from "../ProductsList/ProductsPagination";
const DATA_LIMIT = 6;

export default function Order() {
  const firebase = useContext(FirebaseContext);
  const [orderList, setOrderList] = useState([]);
  const sessionUser = useSelector((state) => state.sessionState);
  const { authUser } = sessionUser;
  useEffect(() => {
    if (authUser) {
      setOrderList([]);
      console.log("inside useeffect");
      firebase.getOrderData(authUser.uid).then((snapshot) => {
        let order = snapshot.val();
        for (let i in order) {
          for (let j of order[i]) {
            const { id, title, image, price } = j;
            setOrderList((arr) => [
              ...arr,
              {
                id,
                title,
                price,
                image,
                i,
              },
            ]);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);
  return (
    <div>
      {orderList.length > 0 ? (
        <>
          <ProductsPagination data={orderList} dataLimit={DATA_LIMIT} />
        </>
      ) : (
        <h1>No Orders to display:</h1>
      )}
    </div>
  );
}
