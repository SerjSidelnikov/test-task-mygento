import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import CheckIcon from '@/common/assets/image/svg/check.svg';

import classes from './Checkbox.module.css';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  value: boolean | string | number | readonly string[] | undefined;
  onChange: () => void;
  name: string;
  className?: string;
}

const Checkbox: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  ({ className, label, value, onChange, name, children, ...props }, ref) => {
    return (
      <label className={cn(classes.container, className)}>
        <input
          ref={ref}
          className={cn('visually-hidden', classes.input)}
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
        <span className={classes.checkbox}>
          <CheckIcon />
        </span>
        <p className={classes.label}>{children || label}</p>
      </label>
    );
  },
);

export default Checkbox;
