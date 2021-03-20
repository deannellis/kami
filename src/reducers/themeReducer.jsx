export const themeReducerDefaultState = {
  colorMode: "light",
  uiDensity: "default",
};

export default (state = themeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_UI_DENSITY":
      return { ...state, uiDensity: action.density };
    default:
      return state;
  }
};
