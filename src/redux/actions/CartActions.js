import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/CartActionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
    },
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
export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_CART,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
