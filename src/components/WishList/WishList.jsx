import React from "react";
import withAuthorization from "../Session/withAuthorization";

function WishList(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Under developement, please come again.
      </h1>
    </div>
  );
}

export default withAuthorization(WishList);
