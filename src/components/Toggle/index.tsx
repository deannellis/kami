import * as React from "react";

type ToggleProps = {
  checked: boolean;
  onToggleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  isDisabled?: boolean;
};
const Toggle = ({
  checked,
  onToggleChange,
  isDisabled = false,
}: ToggleProps) => (
  <label className="toggle" htmlFor="toggle">
    <input
      type="checkbox"
      checked={checked}
      onChange={onToggleChange}
      disabled={isDisabled}
      id="toggle"
    />
    <span className="toggle__switch" />
  </label>
);

export default Toggle;
