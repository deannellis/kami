import * as React from "react";

type ButtonProps = {
  submit?: boolean;
  variant?: "default" | "primary" | "outline" | "no-style";
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};
const Button = ({
  submit = false,
  variant = "default",
  children,
  onClick,
}: ButtonProps) => (
  <button
    className={variant !== "default" ? `button--${variant}` : "button"}
    type={submit ? "submit" : "button"}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
