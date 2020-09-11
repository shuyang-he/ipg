import { combineReducers } from "redux";
import messageDisplay from "./MessageDisplay";
import phoneDisplay from "./PhoneDisplay";
import navDropDisplay from "./NavDropDisplay";
import navStyleChange from "./NavStyleChange";
import sideNavDisplay from "./SideNavDisplay";
import sideNavDropDisplay from "./SideNavDropDisplay";

export default combineReducers({
  messageDisplay,
  phoneDisplay,
  navDropDisplay,
  navStyleChange,
  sideNavDisplay,
  sideNavDropDisplay,
});
