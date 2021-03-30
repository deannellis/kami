import * as React from "react";
import Icon from "./index";

const icons = [
  "Moon Icon",
  "Sun Icon",
  "WiFi Icon",
  "PDF Icon",
  "Stacked Dots Icon",
  "Info Icon",
  "Menu Icon",
  "Facebook Logo",
  "GitHub Logo",
  "LinkedIn Logo",
];

const IconList = () => (
  <div className="icon__list">
    {icons.map((iconTitle) => (
      <div className="icon__list-item">
        <Icon title={iconTitle} />
        <p>{iconTitle}</p>
      </div>
    ))}
  </div>
);

export default IconList;
