export const handlePhoneDisplay = (display) => {
  if (display) {
    return {
      type: "CLOSE_PHONE",
    };
  } else {
    return {
      type: "OPEN_PHONE",
    };
  }
};
