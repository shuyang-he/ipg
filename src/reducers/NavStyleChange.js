const navStyleChange = (state = false, action) => {
  switch (action.type) {
    case "NAV_ORIGIN":
      return false;
    case "NAV_CHANGE":
      return true;
    default:
      return state;
  }
};

export default navStyleChange;
