import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "../../styles/styles.scss";
import AppRouter from "../../routers/AppRouter";
import { themeReducerDefaultState } from "../../reducers/themeReducer";
import { updateUiDensity, updateColorTheme } from "../../theme/updateTheme";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const { uiDensity, colorMode } = theme;
  useEffect(() => {
    if (uiDensity !== themeReducerDefaultState.uiDensity) {
      updateUiDensity(theme.uiDensity);
    }
    if (colorMode !== themeReducerDefaultState.colorMode) {
      updateColorTheme("dark");
    }
  }, []);
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
