import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import { CartReducer } from "./CartReducer";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cart: CartReducer,
});

export default rootReducer;
