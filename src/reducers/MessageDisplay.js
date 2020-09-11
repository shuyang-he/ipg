const messageDisplay = (state = false, action) => {
  switch (action.type) {
    case "OPEN_MESSAGE":
      return true;
    case "CLOSE_MESSAGE":
      return false;
    case "OPEN_PHONE":
      return false;
    case "CLOSE_PHONE":
      return false;
    default:
      return state;
  }
};

export default messageDisplay;
