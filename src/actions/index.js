import { SET_AUTH_USER } from "../constants/actionTypes";
import {
  LOAD_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from "../constants/actionTypes";

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const loadCart = (products) => ({
  type: LOAD_CART,
  payload: products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: product,
});
