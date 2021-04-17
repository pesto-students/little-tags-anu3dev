import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/CartActionTypes';

export const addToCart = (product) => (dispatch, getState) => {
  console.log('inside addtocart action: ', product.id);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
    },
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
