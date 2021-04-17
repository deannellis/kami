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
  const themeColors = ["#3da9fc", "#d9376e", "#6246ea", "#078080"];
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
            id="ui-density"
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
      <h2>Accent Color</h2>
      <i>Select an accent color</i>
      <div style={{ display: "flex", marginTop: "1.6rem" }}>
        {themeColors.map((color) => (
          <div
            style={{
              background: color,
              width: "3.2rem",
              height: "3.2rem",
              marginRight: ".8rem",
              cursor: "pointer",
            }}
            onClick={() => {
              document.documentElement.style.setProperty(
                "--main-accent-color",
                color
              );
            }}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default ThemePage;
