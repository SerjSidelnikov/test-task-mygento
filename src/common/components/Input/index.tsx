import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import classes from './Input.module.css';

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
  className?: string;
}

const Input: React.FC<Props> = ({
  label,
  value,
  onChange,
  required = false,
  errorMessage,
  className,
  ...props
}) => {
  return (
    <label className={cn(classes.input_wrapper, className)}>
      <p className={classes.input_label}>
        {label} {required && <sup>*</sup>}
      </p>

      <input
        className={cn(classes.input, {
          [classes.error]: Boolean(errorMessage),
        })}
        value={value}
        onChange={onChange}
        {...props}
      />

      {errorMessage && <p className={classes.input_error}>{errorMessage}</p>}
    </label>
  );
};

export default Input;
