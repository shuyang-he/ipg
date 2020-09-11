export const handleMessageDisplay = (display) => {
  if (display) {
    return {
      type: "CLOSE_MESSAGE",
    };
  } else {
    return {
      type: "OPEN_MESSAGE",
    };
  }
};
