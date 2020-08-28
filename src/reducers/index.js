import { combineReducers } from "redux";
import loginLoading from "./LoginLoading";
import logoutLoading from "./LogoutLoading";

export default combineReducers({
  loginLoading,
  logoutLoading,
});
