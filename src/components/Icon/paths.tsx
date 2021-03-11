import React from "react";

// type getPathsProps = {title: } 
// interface PathOptions  { title:  "Kami Logo" | "Facebook Logo"};

const getPaths = (title: string): JSX.Element => {
  switch (title) {
    case "Kami Logo":
      return (
        <path d="M474.35 290.33c-26.85 178-247.27 252.92-377.26 122.93-138.47-138.47-41-373 151.18-378.67l33.92-1.42L261 60c-93.25 125.75 53.69 291.07 189.34 213.36l29.67-17zm-39.56 26.85c-148.37 49.45-285.42-106-217.6-247.27C71.65 99.58 13.72 283.27 121.11 390.65 220 491 389.57 448.58 434.79 317.18z" />
      );
    case "Facebook Logo":
      return (
        <path d="M290.83 480V276h69.66l9.95-79.6h-79.61v-49.74c0-22.39 7.45-39.79 39.79-39.79h42.28V34.72c-9.91 0-34.8-2.5-62.14-2.5a96 96 0 00-102 104.49v59.69H139.1V276h69.66v204z" />
      );
    default:
      return <></>;
  }
};

export default getPaths;
