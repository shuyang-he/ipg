const sideNavDisplay = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SIDE_NAV":
      return true;
    case "HIDE_SIDE_NAV":
      return false;
    default:
      return state;
  }
};

export default sideNavDisplay;
