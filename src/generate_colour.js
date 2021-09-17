const generateNumber = () => {
  return Math.floor(Math.random() * 10);
};

export const generateColour = () => {
  let hex = "#";
  for (let index = 0; index < 6; index++) {
    hex = hex + generateNumber();
  }
  return hex;
};
