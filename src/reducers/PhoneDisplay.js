const phoneDisplay = (state = false, action) => {
  switch (action.type) {
    case "OPEN_PHONE":
      return true;
    case "CLOSE_PHONE":
      return false;
    case "OPEN_MESSAGE":
      return false;
    case "CLOSE_MESSAGE":
      return false;
    default:
      return state;
  }
};

export default phoneDisplay;
