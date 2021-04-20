import * as ACTION_TYPES from "../constants/CartActionTypes";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case ACTION_TYPES.CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
