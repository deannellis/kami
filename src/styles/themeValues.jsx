export const UiDensityValues = {
  default: {
    xs: 1,
    s: 1.2,
    m: 1.6,
    l: 3.2,
    xl: 4.8,
  },
  cozy: {
    xs: 0.8,
    s: 1,
    m: 1.4,
    l: 2.8,
    xl: 4.2,
  },
  compact: {
    xs: 0.6,
    s: 0.8,
    m: 1.2,
    l: 2.4,
    xl: 3.6,
  },
};

const darkBlue = "#094067";
const mediumGray = "#16161a";
export const themeColors = {
  light: [
    { varName: "background-color", value: "#f6f9fb" },
    { varName: "background-color--secondary", value: "#fff" },
    { varName: "text-color", value: "#202325" },
    { varName: "header-color", value: darkBlue },
    { varName: "footer-background-color", value: darkBlue },
  ],
  dark: [
    { varName: "background-color", value: "#242629" },
    { varName: "background-color--secondary", value: mediumGray },
    { varName: "text-color", value: "#ffffffD6" },
    { varName: "header-color", value: "#fff" },
    { varName: "footer-background-color", value: mediumGray },
  ],
};
