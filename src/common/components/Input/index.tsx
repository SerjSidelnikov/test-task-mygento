import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import classes from './Input.module.css';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string | undefined;
  onChange: () => void;
  required?: boolean;
  errorMessage?: string;
  className?: string;
}

const Input: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      required = false,
      errorMessage,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <label className={cn(classes.container, className)}>
        <p className={classes.label}>
          {label} {required && <sup>*</sup>}
        </p>

        <input
          ref={ref}
          className={cn(classes.input, {
            [classes.error]: Boolean(errorMessage),
          })}
          value={value}
          onChange={onChange}
          {...props}
        />

        {errorMessage && <p className={classes.text_error}>{errorMessage}</p>}
      </label>
    );
  },
);

export default Input;
