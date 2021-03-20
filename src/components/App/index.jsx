import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "../../styles/styles.scss";
import AppRouter from "../../routers/AppRouter";
import { themeReducerDefaultState } from "../../reducers/themeReducer";
import { updateUiDensity } from "../../theme/updateTheme";

const App = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    console.log("app did mount", theme);
    if (theme.uiDensity !== themeReducerDefaultState.uiDensity) {
      updateUiDensity(theme.uiDensity);
    }
  }, []);
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
