import React from "react";
import { useField } from "formik";

type SelectInputProps = {
  label: string;
  name: string;
  id?: string;
  helperText?: string;
  children: React.ReactNode;
};

const SelectInput = ({ label, ...props }: SelectInputProps) => {
  const [field, meta] = useField(props);
  const { name, helperText, id, children } = props;
  return (
    <div className="input-group">
      {meta.touched && meta.error ? (
        <div className="input__error" data-testid={`errors-${name}`}>
          {meta.error}
        </div>
      ) : (
        <div className="input__helper-text">{helperText}</div>
      )}
      <select
        className={`select-input ${
          meta.touched && meta.error ? "input--error" : ""
        }`}
        {...field}
        name={name}
        id={id}
      >
        {children}
      </select>
      <label
        htmlFor={id || name}
        className={`label ${meta.touched && "label--active"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
