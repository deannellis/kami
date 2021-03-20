import React, { useState } from "react";

import PageLayout from "../components/PageLayout";
import { UiDensityValues, themeColors } from "../styles/themeValues";
import Toggle from "../components/Toggle";

const ThemePage = () => {
  const [uiDensity, setUiDensity] = useState("default");
  const [colorTheme, setColorTheme] = useState("light");
  const updateColorTheme = (theme) => {
    // if(theme === 'light') {
    //   console.log('light theme')
    // } else {
    // }
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
              setUiDensity(value);

              Object.keys(UiDensityValues[value]).forEach((size) => {
                document.documentElement.style.setProperty(
                  `--${size}-size`,
                  `${UiDensityValues[value][size]}rem`
                );
              });
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
