import { UiDensityValues, themeColors } from "./themeValues";

export const updateUiDensity = (value) => {
  Object.keys(UiDensityValues[value]).forEach((size) => {
    document.documentElement.style.setProperty(
      `--${size}-size`,
      `${UiDensityValues[value][size]}rem`
    );
  });
};
