import * as React from "react";
import { useField } from "formik";

type CheckboxProps = {
  children: React.ReactNode;
  name: string;
  id?: string;
};

const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  const { name, id } = props;
  return (
    <div>
      <label className="checkbox__label" htmlFor={id || name}>
        {children}
        <input type="checkbox" {...field} {...props} />
        <span className="checkbox__checkmark" />
      </label>
      {meta.touched && meta.error ? (
        <div className="input__error">{meta.error}</div>
      ) : (
        <div className="input__helper-text" />
      )}
    </div>
  );
};

export default Checkbox;
