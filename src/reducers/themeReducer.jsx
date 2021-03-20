export const themeReducerDefaultState = {
  colorMode: "light",
  uiDensity: "default",
};

export default (state = themeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_UI_DENSITY":
      return { ...state, uiDensity: action.density };
    case "TOGGLE_COLOR_MODE": {
      const colorMode = state.colorMode === "light" ? "dark" : "light";
      return { ...state, colorMode };
    }
    default:
      return state;
  }
};
