import React from 'react';
import withAuthorization from '../Session/withAuthorization';

function WishList(props) {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default withAuthorization(WishList);
