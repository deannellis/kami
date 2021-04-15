import * as React from "react";

type RangeSliderProps = {
  max: number;
  min: number;
  value: number;
  onSliderUpdate(event: React.ChangeEvent<HTMLInputElement>): void;
  isDisabled?: boolean;
};
const RangeSlider = ({
  max,
  min,
  value,
  onSliderUpdate,
  isDisabled = false,
}: RangeSliderProps) => (
  <div className="range-slider">
    <input
      type="range"
      className="range-slider__input"
      min={min}
      max={max}
      value={value}
      onChange={onSliderUpdate}
      disabled={isDisabled}
    />
  </div>
);

export default RangeSlider;
