import * as React from "react";

import { useField } from "formik";

type TextInputProps = {
  helperText?: string;
  placeholder?: string;
  name: string;
  label: string;
  id?: string;
  type: string;
};

const TextInput = ({ label, ...props }: TextInputProps) => {
  const inputProps = { ...props };
  delete inputProps.helperText;
  const [field, meta] = useField(props);
  const { name, helperText, id } = props;
  return (
    <div className="input-group">
      {meta.touched && meta.error ? (
        <div className="input__error" data-testid={`errors-${name}`}>
          {meta.error}
        </div>
      ) : (
        <div className="input__helper-text">{helperText}</div>
      )}
      <input
        className={`text-input ${
          meta.touched && meta.error ? "input--error" : ""
        }`}
        {...field}
        {...inputProps}
      />
      <label
        htmlFor={id || name}
        className={`label ${meta.touched && "label--active"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
