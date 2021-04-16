import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartActionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
