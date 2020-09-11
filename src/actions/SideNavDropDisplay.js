export const handleSideDropDisplay = (show, key) => {
  if (show) {
    return {
      type: "HIDE_SIDE",
      payload: key,
    };
  } else {
    return {
      type: "SHOW_SIDE",
      payload: key,
    };
  }
};
