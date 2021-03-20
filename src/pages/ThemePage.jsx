import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "../components/PageLayout";
import { UiDensityValues, themeColors } from "../theme/themeValues";
import { updateUiDensity } from "../theme/updateTheme";
import Toggle from "../components/Toggle";
import { setUiDensity } from "../actions/themeActions";

const ThemePage = () => {
  const [colorTheme, setColorTheme] = useState("light");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { uiDensity } = theme;
  const updateColorTheme = (theme) => {
    themeColors[theme].forEach(({ varName, value }) => {
      document.documentElement.style.setProperty(`--${varName}`, value);
    });
  };
  return (
    <PageLayout>
      <h1>Themeing</h1>
      <h2>Dark/Light Mode</h2>
      <Toggle
        checked={colorTheme === "light"}
        onToggleChange={() => {
          if (colorTheme === "light") {
            setColorTheme("dark");
            updateColorTheme("dark");
          } else {
            setColorTheme("light");
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
