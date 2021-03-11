import React from "react";
import PropTypes from "prop-types";

export const Icon = ({ fill, size, title }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    aria-labelledby="title"
  >
    <title id="title">Moon Icon</title>
    <path
      d="M474.35 290.33c-26.85 178-247.27 252.92-377.26 122.93-138.47-138.47-41-373 151.18-378.67l33.92-1.42L261 60c-93.25 125.75 53.69 291.07 189.34 213.36l29.67-17zm-39.56 26.85c-148.37 49.45-285.42-106-217.6-247.27C71.65 99.58 13.72 283.27 121.11 390.65 220 491 389.57 448.58 434.79 317.18z"
      fill={fill}
    />
  </svg>
);
Icon.defaultProps = {
  fill: "#000",
  size: 32,
};
Icon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
