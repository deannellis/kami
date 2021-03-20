import { UiDensityValues, themeColors } from "./themeValues";

export const updateUiDensity = (value) => {
  Object.keys(UiDensityValues[value]).forEach((size) => {
    document.documentElement.style.setProperty(
      `--${size}-size`,
      `${UiDensityValues[value][size]}rem`
    );
  });
};
export const updateColorTheme = (theme) => {
  themeColors[theme].forEach(({ varName, value }) => {
    document.documentElement.style.setProperty(`--${varName}`, value);
  });
};
