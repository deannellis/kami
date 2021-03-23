import * as React from "react";

type ButtonProps = {
  submit?: boolean;
  variant?: string;
  children: React.ReactNode;
  clickHandler(event: React.MouseEvent<HTMLButtonElement>): void;
};
const Button = ({
  submit = false,
  variant = "",
  children,
  clickHandler,
}: ButtonProps) => (
  <button
    className={!!variant ? `button--${variant}` : "button"}
    type={submit ? "submit" : "button"}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default Button;
