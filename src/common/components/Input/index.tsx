import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
  onChange: () => void;
  required?: boolean;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  label,
  value,
  onChange,
  required = false,
  errorMessage,
  ...props
}) => {
  return (
    <label>
      <p>
        {label} {required && <sup>*</sup>}
      </p>

      <input value={value} onChange={onChange} {...props} />

      {errorMessage && <p>{errorMessage}</p>}
    </label>
  );
};

export default Input;
