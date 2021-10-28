import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import classes from './RadioButton.module.css';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}

const RadioButton: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  ({ className, label, value, onChange, name, required, ...props }, ref) => {
    return (
      <label className={cn(classes.container, className)}>
        <input
          ref={ref}
          {...props}
          className={cn('visually-hidden', classes.input)}
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className={classes.checkbox} />
        <p className={classes.label}>{label}</p>
      </label>
    );
  },
);

export default RadioButton;
