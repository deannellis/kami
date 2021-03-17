import React, { useState } from "react";

import PageLayout from "../components/PageLayout";

const ThemePage = () => {
  const [uiDensity, setUiDensity] = useState("default");
  const densityValues = {
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
  return (
    <PageLayout>
      <h1>Themeing</h1>
      <h2>UI Density</h2>
      <form>
        <div className="input-group">
          <select
            value={uiDensity}
            className="select-input"
            onChange={(e) => {
              const { value } = e.target;
              setUiDensity(value);

              Object.keys(densityValues[value]).forEach((size) => {
                document.documentElement.style.setProperty(
                  `--${size}-size`,
                  `${densityValues[value][size]}rem`
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
