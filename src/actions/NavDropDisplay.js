export const showDrop = (key) => {
  return {
    type: "SHOW",
    payload: key,
  };
};

export const hideDrop = (key) => {
  return {
    type: "HIDE",
    payload: key,
  };
};
