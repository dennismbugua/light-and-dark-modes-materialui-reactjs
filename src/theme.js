const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";
const chock = "#f50057";

const themeLight = {
  background: gray,
  body: black,
  color: black
};

const themeDark = {
  background: black,
  body: white,
  color: chock
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
