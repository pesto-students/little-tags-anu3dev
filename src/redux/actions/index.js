import { SET_AUTH_USER, RESET_AUTH_USER } from "../constants/actionTypes";

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const resetAuthUser = () => ({ type: RESET_AUTH_USER });
