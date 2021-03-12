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
      <label className="checkbox-input" htmlFor={id || name}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="input__error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox;
