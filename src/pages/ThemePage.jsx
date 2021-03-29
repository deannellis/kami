import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "../components/PageLayout";
import { updateUiDensity, updateColorTheme } from "../theme/updateTheme";
import Toggle from "../components/Toggle";
import { setUiDensity } from "../actions/themeActions";

const ThemePage = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { uiDensity, colorMode } = theme;
  return (
    <PageLayout>
      <h1>Themeing</h1>
      <h2>Dark/Light Mode</h2>
      <Toggle
        checked={colorMode === "light"}
        onIcon="Sun Icon"
        offIcon="Moon Icon"
        onToggleChange={() => {
          if (colorMode === "light") {
            dispatch({ type: "TOGGLE_COLOR_MODE" });
            updateColorTheme("dark");
          } else {
            dispatch({ type: "TOGGLE_COLOR_MODE" });
            updateColorTheme("light");
          }
        }}
      />
      <h2>UI Density</h2>
      <form>
        <div className="input-group">
          <select
            value={uiDensity}
            className="select-input"
            onChange={(e) => {
              const { value } = e.target;
              const action = setUiDensity(value);
              dispatch(action);
              updateUiDensity(value);
            }}
          >
            <option value="default">Default</option>
            <option value="cozy">Cozy</option>
            <option value="compact">Compact</option>
          </select>
        </div>
      </form>
    </PageLayout>
  );
};

export default ThemePage;
