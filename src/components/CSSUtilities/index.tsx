import * as React from "react";
import { useState } from "react";

import RangeSlider from "../RangeSlider";

const CSSUtilities = () => {
  const [truncateWidth, setTruncateWidth] = useState(50);
  const lineHeights = [
    "leading none",
    "leading tight",
    "leading snug",
    "leading normal",
    "leading relaxed",
    "leading loose",
  ];
  const breakpoints = [
    "phone only",
    "tablet portrait up",
    "tablet landscape up",
    "desktop up",
    "big desktop up",
  ];
  const zIndexes = ["z-top", "z-1", "z-2", "z-3", "z-bottom"];
  return (
    <>
      <h1>CSS Utilities</h1>
      <h2>Material Shadows</h2>
      <div className="css-utils__shadows">
        {[...Array(5).keys()].map((i) => (
          <div className="css-utils__shadow">
            <span>Depth 0{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="css-utils__shadows">
        {[...Array(5).keys()].map((i) => (
          <div className="css-utils__shadow--inset">
            <span>Inset 0{i + 1}</span>
          </div>
        ))}
      </div>
      <h2>Truncate Text Mixin</h2>
      <div className="css-utils__truncate-mixin">
        <RangeSlider
          min={24}
          max={100}
          value={truncateWidth}
          onSliderUpdate={(e) => {
            const updatedWidth = parseInt(e.target.value, 10);
            setTruncateWidth(updatedWidth);
            document.documentElement.style.setProperty(
              "--truncate-width",
              `${updatedWidth}%`
            );
          }}
        />
        <p>
          Over all, I want you to discover the joy of creation by your own hand.
          The possibility of creation from paper is infinite. | Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsum recusandae placeat
          quibusdam autem. Illo tenetur excepturi dignissimos modi aut, sint
          maxime doloremque soluta dolorum. Expedita placeat maiores obcaecati
          atque deleniti.
        </p>
      </div>
      <h2>Transitions</h2>
      <div className="css-utils__transitions">
        <div>
          <span>Default Transition (on hover) </span>
        </div>
        <div>
          <span>Pop-in Transition (on hover) </span>
        </div>
      </div>
      <h2>Z-Index</h2>
      <div className="css-utils__z-indexes">
        {zIndexes.map((index) => (
          <div className="css-utils__z-index">
            <span>{index}</span>
          </div>
        ))}
      </div>
      <h2>Responsive Breakpoint Mixins</h2>
      <b>Current Breakpoint:</b>
      <div className="css-utils__breakpoints">
        {breakpoints.map((breakpoint) => (
          <div className="css-utils__breakpoint">
            <p>{breakpoint}</p>
          </div>
        ))}
      </div>
      <i>Resize viewport to see breakpoint ranges</i>
      <h2>Line Height</h2>
      <div className="css-utils__line-heights">
        {lineHeights.map((height) => (
          <div className="css-utils__line-height">
            <h3>{height}</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              deserunt ducimus voluptatum quo, consequatur rem commodi voluptas
              impedit. Ut culpa aliquid aperiam commodi quidem sed quis, accusan
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              deserunt ducimus voluptatum quo, consequatur rem commodi voluptas
              impedit. Ut culpa aliquid aperiam commodi quidem sed quis,
              accusantium inventore cum unde. tium inventore cum unde.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CSSUtilities;
