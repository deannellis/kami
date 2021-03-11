import React from "react";
import PropTypes from "prop-types";

import getPaths from "./paths";

const Icon = ({ size, title }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    aria-labelledby="title"
  >
    <title id={title}>Moon Icon</title>
    {getPaths(title)}
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
